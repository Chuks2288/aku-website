"use client";


import * as z from "zod";
import Rating from 'react-rating';
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

import 'react-toastify/dist/ReactToastify.css';

export const FeedbackRating = () => {

    const [rating, setRating] = useState(0);
    const [isPending, startTransition] = useTransition();


    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            starRating: 0,
        }
    });

    const handleRatingChange = async (value: any) => {
        setRating(value);
        form.setValue("starRating", value);
    }

    const onSubmit = (values: z.infer<typeof FeedbackSchema>) => {
        console.log(values);
    }

    return (
        <div className="md:max-w-[450px] max-w-full mt-10">
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Rating
                                        initialRating={rating}
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        onClick={handleRatingChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-end">
                        <Button
                            disabled={isPending}
                            type="submit"
                            size="lg"
                            variant="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}