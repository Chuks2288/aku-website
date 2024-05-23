"use client";

import * as z from "zod";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { feedback } from "@/actions/feedback";

import { FeedbackSchema } from "@/schema";

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
    status: string,
    statusType: string,
    image: string,
}

const selectOption = [
    {
        status: "excellent",
        statusType: "Excellent",
        image: "/feedback/excellent.svg",
    },
    {
        status: "manageable",
        statusType: "Manageable",
        image: "/feedback/manageable.svg",
    },
    {
        status: "notWorking",
        statusType: "not Working",
        image: "/feedback/notWorking.svg",
    },
] satisfies Props[];


export const FeedbackStatus = () => {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isPending, startTransition] = useTransition();

    const [selectedOption, setSelectedOption] = useState<any>('');

    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            excellent: false,
            manageable: false,
            notWorking: false,
        }
    });

    const handleOptionChange = (option: any) => {
        setSelectedOption(option);
        form.setValue("excellent", option === "excellent");
        form.setValue("manageable", option === "manageable");
        form.setValue("notWorking", option === "notWorking");

        startTransition(() => {
            form.handleSubmit(onSubmit)();
        });
    };

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
        <div className="w-full">
            <Form {...form}>
                <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="flex items-center justify-between gap-x-3">
                        {selectOption.map(({ status, statusType, image }) => (
                            <FormField
                                key={status}
                                control={form.control}
                                // @ts-ignore
                                name={status}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex flex-col gap-y-3">
                                                <div className="relative md:w-[100px] w-[60px] md:h-[100px] h-[60px]">
                                                    <Image
                                                        src={image}
                                                        alt={status}
                                                        fill
                                                    />
                                                </div>
                                                <div className="flex items-center gap-x-2">
                                                    <Checkbox
                                                        disabled={isPending}
                                                        checked={selectedOption === status}
                                                        onCheckedChange={() => handleOptionChange(status)}
                                                        className="border-gray-400"
                                                    />
                                                    <p className="font-bold md:text-md text-xs">
                                                        {statusType}
                                                    </p>
                                                </div>
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>
                </form>
            </Form>
        </div>
    )
}