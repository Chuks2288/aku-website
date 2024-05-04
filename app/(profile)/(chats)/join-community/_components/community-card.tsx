"use client";


import { Icon } from "@iconify/react";

type Props = {
    icon: string;
    title: string;
    description: string;
}

export const CommunityCard = ({
    icon,
    title,
    description
}: Props) => {
    return (
        <div className="flex items-center gap-x-4 min-w-[160px]">
            <div className="bg-green-600 w-10 h-10 flex justify-center items-center">
                <Icon icon={icon} fontSize={25} className="text-white" />
            </div>
            <div className="flex flex-col gap-y-1">
                <h4 className="font-bold text-base">
                    {title}
                </h4>
                <p className="text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}

