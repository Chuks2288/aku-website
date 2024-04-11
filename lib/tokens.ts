import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { getPasswordTwoFactorTokenByEmail } from "@/data/password-twofactor-token";

export const generatePasswordResetToken = async (email: string) => {
    const token = crypto.randomInt(100_000, 1_000_000).toString();
    // const expires = new Date(new Date().getTime() + 3600 * 1000);
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

    const existingToken = await getPasswordTwoFactorTokenByEmail(email);

    if (existingToken) {
        await db.passwordTwoFactorToken.delete({
            where: {
                id: existingToken.id
            }
        });
    }

    const passwordTwoFactorToken = await db.passwordTwoFactorToken.create({
        data: {
            email,
            token,
            expires
        }
    });

    return passwordTwoFactorToken;
}