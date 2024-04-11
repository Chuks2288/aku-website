"use client";

import { motion } from "framer-motion"

import { ourServiceItems } from "@/constant";
import { Card } from "./card";



export const OurService = () => {
    return (
        <div className="h-max p-2 bg-gray-50 pb-10">
            <div className="max-w-[1200px] mx-auto px-3 space-y-8">
                <h2
                    className="text-xl lg:text-2xl text-center font-bold"
                >
                    Our Services
                </h2>
                <motion.div
                    className="pt-6 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8">
                    {ourServiceItems.map((item) => (
                        <Card
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

