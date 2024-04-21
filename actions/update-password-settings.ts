"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { UpdatePasswordSchema } from "@/schema";
import { getUserByEmail, getUserById, getUserByUsername } from "@/lib/user";
import { revalidatePath } from "next/cache";

export const updatePasswordSettings = async (
    values: z.infer<typeof UpdatePasswordSchema>,
) => {
    const validateFields = UpdatePasswordSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized" };
    }

    const userId = await getUserById(user.id);

    if (!userId) {
        return { error: "Unauthorized" };
    }

    // Verify the current password
    const userRecord = await db.user.findUnique({
        where: { id: userId.id },
        select: { password: true },
    });

    if (!userRecord) {
        return { error: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(values.currentPassword, userRecord.password as string);

    if (!passwordMatch) {
        return { error: "Incorrect current password" };
    }

    // Check if the new password matches the confirmation password
    if (values.newPassword !== values.confirmPassword) {
        return { error: "New password and confirmation password do not match" };
    }

    // Update the user with the new password
    await db.user.update({
        where: { id: userId.id },
        data: {
            password: values.newPassword,
        },
    });

    // Revalidate the /settings path if necessary
    revalidatePath("/settings");

    return { success: "Password Updated" };
};
