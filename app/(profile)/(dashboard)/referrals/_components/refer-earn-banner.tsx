"use client";

import Image from "next/image"

export const ReferEarnBanner = () => {
    return (
        <div className="max-w-[40rem] mx-auto bg-[#4CFDAB] rounded-md h-max">
            <div className="flex flex-col items-center justify-center gap-y-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-extrabold text-lg text-blue-800">
                        Refer & Earn
                    </h3>
                    <p>
                        invite 1 user to get
                    </p>
                </div>
                <div className="md:min-w-[25rem] min-w-[17rem] flex items-center justify-between">
                    <div className="flex justify-center items-center font-bold text-4xl bg-white px-7 py-5 text-green-800 rounded-md shadow-inner-gray">
                        $1
                    </div>
                    <div className="relative w-[6rem] h-[6rem]">
                        <Image
                            src="/coins.svg"
                            alt="coins"
                            fill
                        />
                    </div>
                </div>
                <span className="text-foreground text-xs">
                    Your friends can also get bonuses on sign up
                </span>
            </div>
        </div>
    )
}

