"use client";

import Image from "next/image"

import { motion } from "framer-motion";

import { missionInfo } from "@/constant"
import { cn } from "@/lib/utils"



export const Mission = () => {
    return (
        <div className="h-max p-2 bg-[#DFEEFF]">
            <div className="max-w-[1200px] mx-auto px-3 lg:py-10 py-6">
                <motion.div className="">
                    {missionInfo.map((item) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            key={item.id}
                            className={cn
                                ("flex items-center px-3 py-6 justify-between max-w-[1200px] mx-auto flex-1 w-full gap-7",
                                    item.id === "1" && "md:flex-row flex-col-reverse ",
                                    item.id === "2" && "md:flex-row-reverse flex-col-reverse ",
                                )}
                        >
                            <div className="relative w-[340px] h-[340px] lg:w-[400px] lg:h-[350px] mb-8 lg:mb-0">
                                <Image
                                    src={item.image}
                                    fill
                                    alt="Hero"
                                />
                            </div>

                            <div className="max-w-[500px] space-y-4 flex flex-col">
                                <h1 className="text-xl lg:text-2xl font-bold tracking-widest leading-[50px]">
                                    {item.title}
                                </h1>
                                <p className="text-sm">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

