"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSChema } from "@/schema";
import { getUserByEmail } from "@/lib/user";
import { getUserByUsername } from "@/lib/user";

export const register = async (values: z.infer<typeof RegisterSChema>) => {
    const validateFields = RegisterSChema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    // const { email, password, firstName, lastName, userName, phoneNo, imageUrl } = validateFields.data;
    const { email, password, firstName, lastName, userName, phoneNo, imageUrl } = validateFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!email || !hashedPassword || !firstName || !lastName || !lastName || !phoneNo) {
        return { error: "Fill out all fields correctly" }
    }

    const existingUserByEmail = await getUserByEmail(email);
    const existingUserByUsername = await getUserByUsername(userName);

    if (existingUserByEmail) {
        return { error: "Email already in use!" }
    }

    if (existingUserByUsername) {
        return { error: "username already in use!" }
    }

    await db.user.create({
        data: {
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            phoneNo,
            imageUrl,
        },
    });

    return { success: "You have successfully created your account" }

}
