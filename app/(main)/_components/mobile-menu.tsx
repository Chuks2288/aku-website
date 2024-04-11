"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"

import { NavItems } from "./nav-items";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";


export const MobileMenu = () => {
    const pathname = usePathname();

    const [isMounted, setIsMounted] = useState(false);
    const { onOpen, isOpen, onClose } = useMobileSidebar();


    useEffect(() => {
        setIsMounted(true)
    }, []);

    useEffect(() => {
        onClose()
    }, [pathname, onClose]);

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <Button
                onClick={onOpen}
                className="block lg:hidden"
                variant="ghost"
                size="sm"
            >
                <Menu className="h-8 w-8" />
            </Button>

            <Sheet open={isOpen} onOpenChange={onClose}>
                {/* @ts-ignore */}
                <SheetContent className="pl-10 z-[100] gap-y-8" side="left">
                    <Logo
                        width={80}
                        height={45}
                    />
                    <NavItems
                        className="flex-col gap-y-8 items-start pt-10"
                    />
                </SheetContent>
            </Sheet>
        </>
    )
}

