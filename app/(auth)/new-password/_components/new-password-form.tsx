"use client";

import * as z from "zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewPasswordSchema } from "@/schema";
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
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { newPassword } from "@/actions/new-password";
import { useRouter, useSearchParams } from "next/navigation";


interface Props {
    token: any;
    // email?: string | null;
    email?: any;
}


export const NewPasswordForm = ({
    token,
    email
}: Props) => {


    console.log(token);

    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token.token)
                .then((data: any) => {
                    if (data?.error) {
                        setError(data?.error);
                    }

                    if (data?.success) {
                        setSuccess(data?.success);

                    }
                })
                .catch(() => setError("Something went wrong"));
        })
    }

    return (
        <div className="flex-1 space-y-4 flex flex-col bg-white h-full p-3 items-center justify-center">
            <div className="md:w-[480px] w-full mx-auto px-4 space-y-6">
                <div className="flex items-center justify-center">
                    <Image
                        src="/unlock.svg"
                        alt="Padlock"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="text-center space-y-2">
                    <p className="text-xs">
                        Your new password must be different from your previous <br />
                        password
                    </p>
                </div>
                <Form {...form} >
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="New Password"
                                                className="w-full border-b-1.5 text-sm border-x-0 border-t-0 rounded-none border-black/15 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Confirm Password"
                                                className="w-full border-b-1.5 text-sm border-x-0 border-t-0 rounded-none border-black/15 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                                                type="password"
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
                                <Loader2
                                    className="animate-spin w-5 h-5"
                                />
                            ) : (
                                "Save"
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

