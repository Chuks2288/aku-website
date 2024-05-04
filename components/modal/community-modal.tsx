"use client";

import { z } from "zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl
} from "@/components/ui/form";
import { LogoutButton } from "@/components/logout-button";
import { useCommunityMoal } from "@/hooks/use-community-modal";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { CommunitySchema } from "@/schema";
import { Input } from "../ui/input";
import { community } from "@/actions/community";
import { useRouter } from "next/navigation";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const CommunityModal = () => {
    const { isOpen } = useCommunityMoal();

    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);


    const form = useForm<z.infer<typeof CommunitySchema>>({
        resolver: zodResolver(CommunitySchema),
        defaultValues: {
            userName: "",
        }
    })

    const onSubmit = (values: z.infer<typeof CommunitySchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            community(values)
                .then((data: any) => {
                    if (data?.error) {
                        setError(data.error)
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                        router.refresh();
                        window.location.reload();
                    }
                })
                .catch(() => setError("Something went wrong"));
        })
    }



    if (!isMounted) {
        return null;
    }

    return (
        <Dialog
            open={isOpen}
        >

            <DialogContent className="max-w-[460px] bg-white px-4 flex flex-col gap-y-6 items-center justify-center">
                <DialogTitle className="text-center text-xs">
                    Please kindly enter your Username to enter the community
                </DialogTitle>
                <div className="w-[300px]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="userName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Username"
                                                    className="w-full bg-gray-300 text-sm rounded-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormError message={error} />
                                <FormSuccess message={success} />
                                <div className="relative flex justify-center">
                                    <Button
                                        type="submit"
                                        size="sm"
                                        className="w-[120px] bg-blue-400 hover:bg-blue-500"
                                    >
                                        {isPending ?
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            : "Confirm"
                                        }
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >
    )
}

