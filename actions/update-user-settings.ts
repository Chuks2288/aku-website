"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { UpdateUserSchema } from "@/schema";
import { getUserByEmail, getUserById, getUserByUsername } from "@/lib/user";
import { revalidatePath } from "next/cache";

export const updateUserSettings = async (
    values: z.infer<typeof UpdateUserSchema>,
    // currentPassword: string
) => {
    const validateFields = UpdateUserSchema.safeParse(values);

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

    // Check if the email already exists
    const currentEmail = await getUserByEmail(values.email);

    if (currentEmail && currentEmail.id !== userId.id) {
        return { error: "Email already exists" };
    }

    // Check if the username already exists
    const currentUsername = await getUserByUsername(values.userName);

    if (currentUsername && currentUsername.id !== userId.id) {
        return { error: "Username already exists" };
    }

    // Update the user with the new password
    await db.user.update({
        where: { id: userId.id },
        data: {

            ...values,
        },
    });

    // Revalidate the /settings path if necessary
    revalidatePath("/settings");

    return { success: "Password Updated" };
};
