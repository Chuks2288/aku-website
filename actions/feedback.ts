"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { FeedbackSchema } from "@/schema";
import { currentUser } from "@/lib/auth";

export const feedback = async (
    values: z.infer<typeof FeedbackSchema>
) => {
    const validateFields = FeedbackSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { excellent, manageable, notWorking, content, starRating } = validateFields.data;

    const user = await currentUser();

    if (!user) {
        return { error: "Please login to give your feedback!" }
    }

    const existingFeedback = await db.feedback.findUnique({
        where: { userId: user?.id },
    });

    if (existingFeedback) {
        await db.feedback.update({
            where: { userId: user?.id },
            data: {
                excellent,
                manageable,
                notWorking,
                content,
                starRating,
            },
        });
    } else {
        await db.feedback.create({
            data: {
                userId: user?.id,
                excellent,
                manageable,
                notWorking,
                content,
                starRating,
            },
        });
    }

    return { success: "Feedback submitted successfully" };
};
