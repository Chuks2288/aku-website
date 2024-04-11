"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { LoginSchema } from "@/schema";
import { getUserByUsername } from "@/lib/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (
    values: z.infer<typeof LoginSchema>,
    callbackUrl?: string | null,
) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { userName, password } = validateFields.data;

    const existingUser = await getUserByUsername(userName);

    if (!existingUser || !existingUser.userName || !existingUser?.password) {
        return { error: "Username does not exist" }
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
        return { error: "Wrong password" }
    }

    try {
        await signIn("credentials", {
            userName,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
    }

}