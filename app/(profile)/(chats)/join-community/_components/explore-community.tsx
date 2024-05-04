"use client";

import Image from "next/image"
import { motion } from "framer-motion"

import { CommunityCard } from "./community-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { communities } from "@/constant"


export const ExploreCommunity = () => {
    return (
        <div className="h-max py-10">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="max-w-[1200px] mx-auto px-3 h-full"
            >
                <h2 className="text-center text-3xl font-bold my-6">
                    Explore Community
                </h2>
                <div className="flex md:flex-row flex-col justify-between items-center h-full flex-1">
                    <div className="flex-1 space-y-6 max-w-[560px]">
                        <div className="grid grid-cols-2 gap-10">
                            {communities.map(({ icon, title, description }) => (
                                <CommunityCard
                                    key={title}
                                    title={title}
                                    icon={icon}
                                    description={description}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center items-center md:pt-20 pt-6">
                            <Link href="/join-community/community-chat">
                                <Button
                                    size="sm"
                                    className="min-w-[250px] border-none bg-green-500 hover:bg-green-600"
                                >
                                    Join the record
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-[340px] h-[340px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                        <Image
                            src="/people.svg"
                            fill
                            alt="people with internet"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

