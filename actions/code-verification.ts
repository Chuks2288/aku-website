"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { getPasswordResetTokenByToken, getPasswordTwoFactorTokenByEmail } from "@/data/password-twofactor-token";
import { CodeVerificationSchema } from "@/schema";
import { getPasswordTwoFactorConfirmationByUserId } from "@/data/password-twofactor-confirmation";


export const codeVerification = async (
    values: z.infer<typeof CodeVerificationSchema>,
    email: string,
) => {

    const validateFields = CodeVerificationSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { code } = validateFields.data;

    const existingUser = await getUserByEmail(email)

    if (existingUser?.email) {
        if (code) {
            const passwordTwoFactorToken = await getPasswordTwoFactorTokenByEmail(
                existingUser.email
            );

            if (!passwordTwoFactorToken) {
                return { error: "Invalid code" };
            }

            if (passwordTwoFactorToken.token !== code) {
                return { error: "Incorrect code!" }
            }

            const hasExpired = new Date(passwordTwoFactorToken.expires) < new Date();

            if (hasExpired) {
                return { error: "Code expired" }
            }

            await db.passwordTwoFactorToken.delete({
                where: { id: passwordTwoFactorToken.id }
            });

            const existingConfirmation = await getPasswordTwoFactorConfirmationByUserId(
                existingUser.id
            )

            if (existingConfirmation) {
                await db.passwordTwoFactorConfirmation.delete({
                    where: { id: existingConfirmation.id }
                });
            }

            await db.passwordTwoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                }
            })
        }
    }




    return { success: "Code verified!" };
}