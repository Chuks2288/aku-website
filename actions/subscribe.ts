"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { SubscribeSchema } from "@/schema";


export const subscribe = async (values: z.infer<typeof SubscribeSchema>) => {
    const validateFields = SubscribeSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { email, isTermsEnabled } = validateFields.data;

    const existingSubscriber = await db.emailSubscribeSchema.findUnique({
        where: { email }
    });

    if (existingSubscriber) {
        return { error: "You are already subscribed with this email" }
    }

    await db.emailSubscribeSchema.create({
        data: {
            email,
            isTermsEnabled
        }
    });

    return { success: "Thanks for subscribing" }
}