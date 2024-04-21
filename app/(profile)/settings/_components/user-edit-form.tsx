"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { User } from "@prisma/client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { UpdateUserSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { updateUserSettings } from "@/actions/update-user-settings";
import { Edit2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type Props = {
    user: User,
}

export const UserEditForm = ({
    user,
}: Props) => {

    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof UpdateUserSchema>>({
        resolver: zodResolver(UpdateUserSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            userName: user?.userName || "",
            email: user?.email || "",
            phoneNo: user?.phoneNo || "",
        }
    });

    const onSubmit = (values: z.infer<typeof UpdateUserSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            updateUserSettings(values)
                .then((data) => {
                    if (data?.error) {
                        setError(data.error)
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                        toast.success("Settings Updated");
                        router.refresh();
                    }
                })
                .catch(() => setError("Something went wrong"));
        })
    }

    return (
        <div className="w-full flex flex-col gap-y-4">
            <h4 className="font-bold text-md text-center">
                Profile
            </h4>
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-600 font-bold text-base">First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="First Name"
                                            className="w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-600 font-bold text-base">Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Last Name"
                                            className="w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="userName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-600 font-bold text-base">Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Username"
                                            className="w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-600 font-bold text-base">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Enter your e-mail"
                                            className="w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-600 font-bold text-base">Phone No.</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Phone No."
                                            className="w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div
                            onClick={() => router.push("/settings/password-settings")}
                            className="cursor-pointer gap-y-3"
                        >
                            <h4 className="text-green-600 font-bold text-base">
                                Password
                            </h4>
                            <div className="p-3 flex items-center justify-between rounded-md w-full text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-gray-100 border-none">
                                <p>

                                </p>
                                <span className="ml-auto">
                                    <Edit2 className="w-5 h-5 cursor-pointer" />
                                </span>
                            </div>
                        </div>
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
                            "Update"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

