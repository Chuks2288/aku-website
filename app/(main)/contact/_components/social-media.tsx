"use client";

import { Icon } from "@iconify/react"
import Link from "next/link"

import { socialIcons } from "@/constant"



export const SocialMedia = () => {
    return (
        <div className="h-[20vh]">
            <div className="max-w-[1200px] mx-auto px-3">
                <div className="flex flex-col justify-center items-center gap-y-6">
                    <h4 className="font-bold text-xl">
                        Follow us on social media
                    </h4>
                    <div className="flex items-center gap-x-6">
                        {socialIcons.map((icon) => (
                            <Link
                                href={icon.href}
                                key={icon.href}
                                className="text-white w-10 h-10 rounded-sm bg-green-700 flex items-center justify-center"
                            >
                                <Icon icon={icon.icon} fontSize="30px" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

