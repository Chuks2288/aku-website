"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button"

export const Hero = () => {
    const router = useRouter();

    return (
        <div className="h-max bg-gray-50 p-2">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex md:flex-row flex-col items-center px-3 justify-between gap-x-4 max-w-[1200px] mx-auto flex-1 w-full">
                <div className="max-w-[370px] space-y-6 flex flex-col">
                    <h1 className="text-[2rem] lg:text-[2.7rem] font-bold tracking-widest leading-[50px]">
                        Empowering Your Financial Future
                    </h1>
                    <p className="text-sm">
                        An online platform designed to help individuals empower their financial futures
                        through various means, including financial education, investment opportunities,
                        and a referral program.
                    </p>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => router.push("/getStarted")}
                        className="w-[200px]"
                    >
                        Get Started
                    </Button>

                </div>
                <div className="relative w-[340px] h-[340px] lg:w-[524px] lg:h-[524px] mb-8 lg:mb-0">
                    <Image
                        src="/home/hero.svg"
                        fill
                        alt="Hero"
                    />
                </div>
            </motion.div>
        </div>
    )
}

