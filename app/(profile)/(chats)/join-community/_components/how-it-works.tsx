"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { communityWorks } from "@/constant";
import { WorkCard } from "@/app/(profile)/(dashboard)/community/_components/work-card";
import { Button } from "@/components/ui/button";


export const HowItWorks = () => {
    return (
        <div className="h-max py-10">
            <div className="max-w-[1200px] mx-auto px-3 space-y-4">
                <h1 className="text-xl lg:text-2xl font-bold tracking-widest leading-[50px] text-center">
                    How It Works
                </h1>
                <motion.div className="pt-6 grid lg:grid-cols-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-8">
                    {communityWorks.map((work) => (
                        <WorkCard
                            key={work.title}
                            title={work.title}
                            text={work.text}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}


