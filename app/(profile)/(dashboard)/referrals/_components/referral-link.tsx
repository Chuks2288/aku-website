"use client";

import { Check, Copy, Share, Share2 } from "lucide-react"
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import useOrigin from "@/hooks/use-origin";
import { ShareModal } from "@/components/modal/share-modal";

type Props = {
    user: User
}

export const ReferralLink = ({
    user
}: Props) => {
    const origin = useOrigin();
    const [copied, setCopied] = useState(false);
    const [closeShareUrl, setCloseShareUrl] = useState(false);

    if (!user) {
        redirect("/getStarted");
    }

    const inviteUrl = `${origin}/register?ref=${user}`;


    const onCopy = () => {
        navigator.clipboard.writeText(inviteUrl);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    return (
        <div className="space-y-2 relative">
            <h4 className="text-sm font-bold ">
                Refer a friend now!
            </h4>
            <div className="max-w-[40rem] mx-auto bg-[#4CFDAB] rounded-md h-max">
                <div className="flex flex-col max-w-[30rem] mx-auto py-3 gap-y-3 px-3">
                    <h4 className="text-sm">
                        Referral Link
                    </h4>
                    <div className="flex items-center justify-center relative">
                        <Input
                            className="rounded-md border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            value={inviteUrl}
                        />
                        <div className="gap-x-2 flex items-center absolute right-5 top-3 z-10">
                            <button
                                onClick={onCopy}
                            >
                                {copied ?
                                    <Check className="w-4 h-4" />
                                    :
                                    <Copy className="w-4 h-4" />
                                }
                            </button>
                            <button
                                onClick={() => setCloseShareUrl(!closeShareUrl)}
                            >
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    {closeShareUrl && (
                        <ShareModal
                            inviteUrl={inviteUrl}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

