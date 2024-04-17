"use server";

import * as z from "zod";
import { getUserByEmail } from "@/lib/user";
import { ResetSchema } from "@/schema";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validateFields = ResetSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { email } = validateFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email not found" };
    }


    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        // email,
        passwordResetToken.email,
        passwordResetToken.token
    )

    console.log(passwordResetToken.email, passwordResetToken.token);

    return {
        success: "Reset email sent!",
        emailToken: passwordResetToken.email
    }
}

