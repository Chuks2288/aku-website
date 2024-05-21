"use client";

import * as z from "zod";
import axios from "axios";
import qs from "query-string";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Plus, SendHorizonal, Smile } from "lucide-react";
import EmojiPicker from "@/components/emoji-picker";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";

interface Props {
    actionUrl: string;
    name: string;
    query: Record<string, any>;
    type: "conversation" | "community";
}

const formSchema = z.object({
    content: z.string().min(1),
});

const ChatInput = ({
    actionUrl,
    name,
    query,
    type
}: Props) => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = qs.stringifyUrl({
                url: actionUrl,
                query,
            })
            await axios.post(url, values);
            form.reset();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="h-full max-w-[1200px] mx-auto px-3">
            <div className="fixed bottom-0 left-0 right-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative p-4 pb-6">
                                            <Input
                                                disabled={isLoading}
                                                className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none
                                        border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600
                                         dark:text-zinc-200"
                                                placeholder={`Message ${type === "conversation" ? name : "#" + name}`}
                                                {...field}
                                            />

                                            <div className="absolute top-7 left-8 cursor-pointer">
                                                <EmojiPicker
                                                    onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)}
                                                />
                                            </div>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <button
                            type="submit"
                            className="absolute top-7 right-8 cursor-pointer"
                        >
                            <SendHorizonal className="h-7 w-7 text-green-500" />
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ChatInput;