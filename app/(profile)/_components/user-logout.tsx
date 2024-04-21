"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLogoutMoal } from "@/hooks/use-logout-modal";

export const UserLogout = () => {

    const { onOpen } = useLogoutMoal();


    return (
        <Button
            onClick={onOpen}
            variant="ghost"
            className="flex items-center shadow-red-200 border-2 border-red-500
                 text-red-500 gap-x-2 max-w-[110px] p-1 shadow-sm drop-shadow-red rounded-sm">
            <h6 className="text-base">
                Logout
            </h6>
            <ArrowRight className="w-4 h-4" />
        </Button>
    )
}

