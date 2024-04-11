import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const passwordTwoFactorToken = await db.passwordTwoFactorToken.findUnique({
            where: { token }
        });

        return passwordTwoFactorToken;
    } catch {
        return null;
    }
};

export const getPasswordTwoFactorTokenByEmail = async (email: string) => {
    try {
        const passwordTwoFactorToken = await db.passwordTwoFactorToken.findFirst({
            where: { email }
        });

        return passwordTwoFactorToken;
    } catch {
        return null;
    }
};

