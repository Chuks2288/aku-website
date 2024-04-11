"use client";

import * as z from "zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { CodeVerificationSchema } from "@/schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useResetForm } from "@/hooks/use-reset-form";
import { codeVerification } from "@/actions/code-verification";


const SendResetEmailButton = ({ email }: { email: string }) => {
    const { sendResetEmail, isPending } = useResetForm();

    const handleSendEmail = () => {
        sendResetEmail(email);
    };

    return (
        <Button
            variant="ghost"
            disabled={isPending}
            onClick={handleSendEmail}
            className="text-blue-700"
        >
            {isPending ?
                <Loader2 className="animate-spin w-5 h-5" />
                : "Resend"
            }
        </Button>
    );
}

export const CodeVerificationForm = ({ email }: { email: string | any }) => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [timer, setTimer] = useState<number>(10);


    const form = useForm<z.infer<typeof CodeVerificationSchema>>({
        resolver: zodResolver(CodeVerificationSchema),
        defaultValues: {
            code: "",
        }
    });

    const onSubmit = (values: z.infer<typeof CodeVerificationSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            codeVerification(values, email)
                .then((data: any) => {
                    if (data?.error) {
                        setError(data?.error);
                    }

                    if (data?.success) {
                        setSuccess(data?.success);

                        setTimeout(() => {
                            router.push("/new-password");
                        }, 1000);
                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    };


    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            // Handle timer reaching 0
        }
    }, [timer]);



    return (
        <div className="flex-1 space-y-4 flex flex-col bg-white h-full p-3 items-center justify-center">
            <div className="md:w-[480px] w-full mx-auto px-4 space-y-6">
                <div className="flex items-center justify-center">
                    <Image src="/message.svg" alt="Padlock" width={60} height={60} />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="md:text-2xl text-xl font-bold leading-[50px]">Forgotten Password</h1>
                    <p className="text-xs">Please enter the 6 digit code sent to <br />{email}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field} disabled={isPending}>
                                                <InputOTPGroup className="gap-x-6 w-full flex items-center justify-evenly">
                                                    {[...Array(6)].map((_, index) => (
                                                        <InputOTPSlot
                                                            index={index}
                                                            {...field}
                                                            className="border-[1px] rounded-md"
                                                        />
                                                    ))}
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-end text-sm">
                            {timer > 0 ? (
                                <p>{Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
                            ) : (
                                <div className="flex items-center gap-x-1">
                                    <p>Didn’t receive any code? </p>

                                    <SendResetEmailButton email={email} />
                                </div>
                            )}
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button variant="primary" disabled={isPending} type="submit" className="w-full">
                            {isPending ? <Loader2 className="animate-spin w-5 h-5" /> : "Verify"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
