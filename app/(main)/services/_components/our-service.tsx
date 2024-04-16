"use client";

import { motion } from "framer-motion";

import { ourServiceItems } from "@/constant"
import { Card } from "../../_components/card"

export const OurService = () => {
    return (
        <div className="h-max p-2 pb-10">
            <div className="max-w-[1200px] mx-auto px-3">
                <motion.div
                    className="pt-6 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8">
                    {ourServiceItems.map((item) => (
                        <Card
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

