"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSChema } from "@/schema";
import { getUserByEmail, getUserByUsername } from "@/lib/user";
import shortid from "shortid";

export const register = async (values: z.infer<typeof RegisterSChema>) => {
    const validateFields = RegisterSChema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password, firstName, lastName, userName, phoneNo, imageUrl, referrerLink } = validateFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!email || !hashedPassword || !firstName || !lastName || !userName || !phoneNo) {
        return { error: "Fill out all fields correctly" };
    }

    const existingUserByEmail = await getUserByEmail(email);
    const existingUserByUsername = await getUserByUsername(userName);

    if (existingUserByEmail) {
        return { error: "Email already in use!" };
    }

    if (existingUserByUsername) {
        return { error: "Username already in use!" };
    }

    let referrer;
    let referrerUser;

    if (referrerLink) {
        // Find the referrer using the provided referrer link
        referrerUser = await db.referrerLink.findUnique({
            where: { link: referrerLink },
            include: { user: true },
        });

        if (!referrerUser) {
            return { error: "Referrer not found" };
        }
        referrer = referrerUser.user;
    }

    // Create the new user
    const newUser = await db.user.create({
        data: {
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            phoneNo,
            imageUrl,
            // referrer: referrer ? { connect: { id: referrer.id } } : undefined,
        },
    });

    // Generate a unique referrer link for the new user
    const newReferrerLink = shortid.generate();
    await db.referrerLink.create({
        data: {
            link: newReferrerLink,
            user: { connect: { id: newUser.id } },
        },
    });

    // If the user was referred, create a referral record
    if (referrer) {
        await db.referral.create({
            data: {
                referrer: { connect: { id: referrer.id } },
                referred: { connect: { id: newUser.id } },
            },
        });
    }

    return { success: "You have successfully created your account" };
};
