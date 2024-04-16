"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { options } from "@/constant";
import { Card } from "./card";

export const Choose = () => {
    return (
        <motion.div
            className="max-w-[1200px] mx-auto px-3 flex flex-col lg:flex-row items-center justify-between relative space-y-6 sm:py-10">
            <motion.div
                whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <Image
                    src="/about/choose.svg"
                    alt="Image"
                    width={500}
                    height={500}
                    layout="fixed"
                    className="rounded-lg"
                />
            </motion.div>
            <motion.div className="w-full lg:w-1/2 lg:pl-4 space-y-6">
                <motion.div
                    whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex flex-col gap-y-4"
                >
                    <h1 className="text-center lg:text-3xl text-xl font-bold">
                        Why choose us?
                    </h1>
                    <p className="text-sm">
                        At AKU, we understand that choosing the right financial platform is a
                        significant decision. Here's why AKU stands out:
                    </p>
                </motion.div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
                    {options.map((option) => (
                        <Card
                            key={option.title}
                            icon={option.icon}
                            title={option.title}
                            description={option.description}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
