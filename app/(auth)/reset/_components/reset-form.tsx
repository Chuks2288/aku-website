"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Loader2 } from "lucide-react";


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { useResetForm } from "@/hooks/use-reset-form";

import { ResetSchema } from "@/schema";

export const ResetForm = () => {
    const { error, success, isPending, sendResetEmail } = useResetForm();
    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (data: { email: string }) => {
        sendResetEmail(data.email);
    };

    return (
        <div className="flex-1 space-y-4 flex flex-col bg-white h-full p-3 items-center justify-center">
            <div className="md:w-[480px] w-full mx-auto px-4 space-y-6">
                <div className="flex items-center justify-center">
                    <Image src="/padlock.svg" alt="Padlock" width={60} height={60} />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="md:text-2xl text-xl font-bold leading-[50px]">
                        Forgotten Password
                    </h1>
                    <p className="text-xs">
                        Enter your email address to get a reset code
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Email"
                                                className="w-full border-b-1.5 text-sm border-x-0 border-t-0 rounded-none border-black/15 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />

                        <Button
                            variant="primary"
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                            {isPending ? (
                                <Loader2 className="animate-spin w-5 h-5" />
                            ) : (
                                "Send"
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
