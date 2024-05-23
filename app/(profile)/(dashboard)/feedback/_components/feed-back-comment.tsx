"use client";


import * as z from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormControl
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import { feedback } from "@/actions/feedback";
import { toast } from "sonner";

export const FeedbackComment = () => {

    const [isPending, startTransition] = useTransition();


    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            content: "",
        }
    });

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
                                    <Textarea
                                        {...field}
                                        placeholder="comments"
                                        disabled={isPending}
                                        rows={10}
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
                            Send Feedback
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}