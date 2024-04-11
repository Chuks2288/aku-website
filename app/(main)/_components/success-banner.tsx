"use client";

import Image from "next/image"
import { useRouter } from "next/navigation"

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button"

export const SuccessBanner = () => {
    const router = useRouter();

    return (
        <div className="h-max bg-white">
            <div className="lg:h-[21vh] h-0 w-full" />
            <div className="bg-blue-700">
                <motion.div
                    whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex relative flex-col lg:flex-row items-center text-white px-3 lg:py-10 py-6 justify-between gap-x-4 max-w-[1200px] mx-auto flex-1 w-full">
                    <div className="max-w-[420px] space-y-6 flex flex-col">
                        <div className="">
                            <h1 className="text-[1.8rem] lg:text-[2.4rem] font-bold tracking-widest leading-[50px]">
                                A better tomorrow starts today....
                            </h1>
                            <p className="text-sm">
                                Your success is our mission
                            </p>
                            <Button
                                variant="whiteButton"
                                size="sm"
                                onClick={() => router.push("/getStarted")}
                                className="w-[200px]"
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-[400px] h-[370px] mb-0 lg:flex hidden">
                            <Image
                                src="/home/task.svg"
                                fill
                                alt="Task"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
