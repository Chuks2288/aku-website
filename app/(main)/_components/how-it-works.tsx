"use client";

import { motion } from "framer-motion";

import { works } from "@/constant";
import { WorkCard } from "./work-card"


export const HowItWorks = () => {
    return (
        <div className="bg-white h-max py-10 p-2">
            <div className="max-w-[1200px] mx-auto px-3 space-y-4">
                <h1 className="text-xl lg:text-2xl font-bold tracking-widest leading-[50px] text-center">
                    How It Works
                </h1>
                <motion.div className="pt-6 grid lg:grid-cols-3 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-8">
                    {works.map((work) => (
                        <WorkCard
                            key={work.title}
                            icon={work.icon}
                            title={work.title}
                            text={work.text}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

