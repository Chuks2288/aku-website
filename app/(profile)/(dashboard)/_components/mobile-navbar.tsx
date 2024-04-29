"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { User } from "@prisma/client";

import {
    Sheet,
    SheetContent,
    SheetDescription
} from "@/components/ui/sheet";
import { useMobileNavbar } from "@/hooks/use-mobile-navbar";
import { Button } from "@/components/ui/button";
import { ProfileSidebar } from "./profile-sidebar";

type Props = {
    user: User
}

export const MobileNavbar = ({
    user
}: Props) => {

    const pathname = usePathname();
    const { isOpen, onOpen, onClose } = useMobileNavbar();

    useEffect(() => {
        onClose()
    }, [pathname, onClose]);

    return (
        <div className="block md:hidden mt-2 h-10 bg-green-700">
            <Button
                onClick={onOpen}
                variant="ghost"
                size="sm"
            >
                <Menu className="w-5 h-5" />
            </Button>

            <Sheet
                open={isOpen}
                onOpenChange={onClose}
            >
                <SheetContent side="left">
                    <ProfileSidebar user={user} />
                </SheetContent>
            </Sheet>
        </div>
    )
}

