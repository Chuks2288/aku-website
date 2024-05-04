"use server";

import { db } from "@/lib/db";
import { CommunitySchema } from "@/schema";
import { MemberRole } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const community = async (values: z.infer<typeof CommunitySchema>) => {
    const validateFields = CommunitySchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { userName } = validateFields.data;

    // Find the user by username
    const user = await db.user.findUnique({
        where: { userName }
    });

    // Check if the user exists
    if (!user) {
        return { error: "Username does not exist" };
    }

    // Check if the user is already a member of the community
    const existingCommunity = await db.community.findUnique({
        where: { userId: user.id }
    });

    if (existingCommunity) {
        return { error: "User is already a member of the community" };
    }

    // If not, add the user as a member
    // const allUsers = await db.user.findMany({});

    await db.community.create({
        data: {
            userId: user.id,
            name: "AKU General Community",
            communityMember: true,
            members: {
                create: {
                    userId: user.id,
                    role: MemberRole.GUEST
                }
            }
        }
    });

    revalidatePath("/community-chat");

    return { success: "You are now part of the community" };
}
