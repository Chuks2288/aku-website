"use client";

import Image from "next/image";

export const WaterMark = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] opacity-10">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
};
