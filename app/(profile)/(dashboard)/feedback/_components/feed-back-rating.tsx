"use client";


import * as z from "zod";
// import { Rating } from 'react-simple-star-rating'
import { Rating, ThinStar } from '@smastrom/react-rating'
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormControl
} from "@/components/ui/form";
import { FeedbackSchema } from "@/schema";
import { Button } from "@/components/ui/button";

import '@smastrom/react-rating/style.css'
import { feedback } from "@/actions/feedback";
import { toast } from "sonner";

export const FeedbackRating = () => {

    const [rating, setRating] = useState(0);
    const [isPending, startTransition] = useTransition();

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#808080',
    }

    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            starRating: 0,
        }
    });

    const handleRatingChange = async (value: any) => {
        setRating(value);
        form.setValue("starRating", value);

        startTransition(() => {
            form.handleSubmit(onSubmit)();
        });
    }

    const onSubmit = (values: z.infer<typeof FeedbackSchema>) => {

        startTransition(() => {
            feedback(values)
                .then((data) => {
                    if (data?.error) {
                        toast.error(data?.error)
                    }
                    if (data?.success) {
                        // form.reset();
                        toast.success(data?.success);
                    }
                })
                .catch(() => toast.error("Something went wrong"));
        })
    }

    return (
        <div className="md:max-w-[350px] max-w-full mt-10 space-y-3">
            <h4 className="text-blue-500 text-md font-semibold">
                Rate your experience (1-5)
            </h4>
            <Form {...form}>
                <form
                    className=""
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="grid">
                        <FormField
                            control={form.control}
                            name="starRating"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Rating
                                            isDisabled={isPending}
                                            value={rating}
                                            onChange={handleRatingChange}
                                            spaceBetween="medium"
                                            radius="none"
                                            itemStyles={myStyles}
                                            className="w-12 h-12"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}