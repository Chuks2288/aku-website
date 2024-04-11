import { db } from "@/lib/db";

export const getPasswordTwoFactorConfirmationByUserId = async (
    userId: string
) => {
    try {
        const twoFactorConfirmation = await db.passwordTwoFactorConfirmation.findUnique({
            where: { userId }
        });

        return twoFactorConfirmation;
    } catch {
        return null;
    }
};