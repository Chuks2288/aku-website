"use client";

import { usePathname, useRouter } from "next/navigation";
import "../../../globals.css";

import { profiles } from "@/constant";
import { cn } from "@/lib/utils";

export const UserItems = () => {
    const pathname = usePathname();
    const router = useRouter();


    return (
        <div className="flex flex-col gap-y-6">
            {profiles.map(({ title, path }) => {

                const route = pathname === path;

                return (
                    <div
                        key={title}
                        className="underline-wrapper"
                    >
                        <h4
                            onClick={() => router.push(path)}
                            className={cn(
                                "text-black text-sm font-semibold cursor-pointer",
                                route && "text-green-600 font-bold",
                                route && "underlined"
                            )}
                        >
                            {title}
                        </h4>
                    </div>
                )
            })}
        </div>
    )
}

