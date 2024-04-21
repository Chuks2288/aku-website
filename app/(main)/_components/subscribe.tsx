"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { SubscribeSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { subscribe } from "@/actions/subscribe";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";


export const Subscribe = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SubscribeSchema>>({
        resolver: zodResolver(SubscribeSchema),
        defaultValues: {
            email: "",
            isTermsEnabled: false,
        }
    });


    const onSubmit = (values: z.infer<typeof SubscribeSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            subscribe(values)
                .then((data: any) => {
                    if (data?.error) {
                        setError(data.error)
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError("Something went wrong"));
        })
    }

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-wider">
                Subscribe to Our Newsletter
            </h3>

            <div className="w-full">
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className=" flex items-center bg-white border-2 rounded-md w-[290px]">
                                            <Input
                                                {...field}
                                                placeholder="Enter your email"
                                                disabled={isPending}
                                                className="border-none text-black rounded-e-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                type="submit"
                                                disabled={isPending}
                                                className="p-1"
                                            >
                                                Subscribe
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isTermsEnabled"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="flex items-center gap-x-3">
                                            <Checkbox
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="border-gray-400"
                                            />
                                            <p className="text-muted-forground text-xs max-w-full shrink-0">
                                                I agree to my email being used to receive the newsletter
                                            </p>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormError message={error} />
                        <FormSuccess message={success} />
                    </form>
                </Form>
            </div>
        </div>
    )
}

