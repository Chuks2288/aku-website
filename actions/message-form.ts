"use server";

import { FormMessageSchema } from "@/schema";
import * as z from "zod";
import { db } from "@/lib/db";

export const messageForm = async (values: z.infer<typeof FormMessageSchema>) => {
    const validateFields = FormMessageSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { name, email, phoneNo, subject, message } = validateFields.data;

    await db.formMessage.create({
        data: {
            name,
            email,
            phoneNo,
            subject,
            message
        }
    });

    return { success: "Message Sent successfully" }

}