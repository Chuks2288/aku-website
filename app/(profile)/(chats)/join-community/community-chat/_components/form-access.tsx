"use client";


import { useEffect } from "react";
import { CommunityModal } from "@/components/modal/community-modal";
import { useCommunityMoal } from "@/hooks/use-community-modal";

export const FormAccess = () => {
    const { onOpen } = useCommunityMoal();

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <div>
            <CommunityModal />
        </div>
    );
};


