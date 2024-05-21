"use client";

import { Icon } from "@iconify/react";

const referItems = [
    {
        icon: "arcticons:moneytracker",
        description: "Share link to friends",
    },
    {
        icon: "fluent-mdl2:add-friend",
        description: `Friends register with your link`,
    },
    {
        icon: "arcticons:moneytracker",
        description: "You earn.",
    },
]
export const HowItWorkBanner = () => {
    return (
        <div className="max-w-[40rem] mx-auto bg-[#4CFDAB] rounded-md h-max">
            <div className="flex flex-col items-center justify-center gap-y-4 py-2 px-4">
                <h4 className="font-bold text-md">
                    How it works
                </h4>
                <div className="flex items-center justify-between min-w-[25rem] gap-x-6">
                    {referItems.map(({ icon, description }) => (
                        <div
                            className="flex flex-col items-center justify-center"
                            key={description}
                        >
                            <Icon icon={icon} fontSize={24} />
                            <h4 className="text-sm text-center">
                                {description}
                            </h4>
                        </div>
                    ))}
                </div>
                <h4 className="text-xs">
                    Your earnings increase with every friend you invite to join
                </h4>
            </div>
        </div>
    )
}

