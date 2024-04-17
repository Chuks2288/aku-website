"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { NewPasswordSchema } from "@/schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { getPasswordTwoFactorTokenByEmail } from "@/data/password-twofactor-token";
import { getPasswordTwoFactorConfirmationByUserId } from "@/data/password-twofactor-confirmation";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    email: string,
) => {
    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { password, confirmPassword } = validatedFields.data;

    if (confirmPassword !== password) {
        return { error: "Passwords do not match" };
    }

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "User not found" };
    }

    const passwordTwoFactorToken = await getPasswordTwoFactorTokenByEmail(email);

    if (!passwordTwoFactorToken) {
        return { error: "Invalid or expired token" };
    }

    // Assuming the code verification token is also used as a confirmation for setting a new password
    const existingConfirmation = await getPasswordTwoFactorConfirmationByUserId(existingUser.id);

    // if (!existingConfirmation || existingConfirmation.token !== passwordTwoFactorToken.token) {
    //     return { error: "Code verification not completed" };
    // }
    if (!existingConfirmation) {
        return { error: "Code verification not completed" };
    }

    const hasExpired = new Date(passwordTwoFactorToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
    });

    // Clean up password two-factor confirmation token after setting the new password
    await db.passwordTwoFactorConfirmation.delete({
        where: { id: existingConfirmation.id },
    });

    return { success: "Password updated successfully!" };
};
