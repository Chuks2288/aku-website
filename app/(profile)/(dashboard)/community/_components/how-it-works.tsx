"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { communityWorks } from "@/constant";
import { WorkCard } from "./work-card";
import { Button } from "@/components/ui/button";


export const HowItWorks = () => {
    return (
        <div className="bg-white py-10 p-2 flex flex-col justify-center items-center h-screen">
            <div className="max-w-[1200px] mx-auto px-3 space-y-4">
                <h1 className="text-xl lg:text-2xl font-bold tracking-widest leading-[50px] text-center">
                    How It Works
                </h1>
                <motion.div className="pt-6 grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-8 w-full">
                    {communityWorks.map((work) => (
                        <WorkCard
                            key={work.title}
                            title={work.title}
                            text={work.text}
                        />
                    ))}
                </motion.div>

                <div className="flex justify-center items-center mt-6">
                    <Link href="/join-community">
                        <Button
                            variant="primary"
                            size="lg"
                        >
                            Explore
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


