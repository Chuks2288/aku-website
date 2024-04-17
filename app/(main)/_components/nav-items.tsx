"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { navItems } from "@/constant";

type Props = {
    className: string;
}

export const NavItems = ({
    className
}: Props) => {
    const router = useRouter();
    const pathname = usePathname();


    return (
        <div className={cn(
            "flex items-center",
            className
        )}>
            {navItems.map((navItem, index) => {
                const isLastButton = index === navItems.length - 1;
                const location = pathname === navItem.path;

                return (
                    <Button
                        variant={isLastButton ? "primary" : "ghost"}
                        size="sm"
                        onClick={() => router.push(navItem.path)}
                        className={cn(
                            "text-sm font-semibold",
                            location && !isLastButton && "text-blue-800 font-bold",
                            location && isLastButton && ""
                        )}
                        key={navItem.label}
                    >
                        {navItem.label}
                    </Button>
                )
            })}
        </div >
    )
}

