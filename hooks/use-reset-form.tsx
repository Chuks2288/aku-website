import * as z from "zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { reset } from "@/actions/reset";

export const useResetForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const sendResetEmail = (email: string) => {
        startTransition(() => {
            reset({ email })
                .then((data: any) => {
                    if (data?.error) {
                        setError(data?.error);
                    }

                    if (data?.success) {
                        setSuccess(data?.success);
                        router.push("/code-verification")
                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    };

    return { error, success, isPending, sendResetEmail };
}
