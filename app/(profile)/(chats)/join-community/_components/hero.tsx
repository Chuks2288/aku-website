"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative min-h-[70vh]"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/community.svg')" }}
            >
                <div className="absolute inset-0 bg-blue-800 opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-between text-white gap-y-4">
                    <div className="flex flex-col items-center justify-center mt-20 text-center gap-y-3">
                        <h1 className="text-4xl font-bold ">
                            Join Our Community
                        </h1>
                        <h4 className="text-base">
                            Connect. Learn. Thrive
                        </h4>
                        <Link href="/join-community/community-chat">
                            <Button
                                size="sm"
                                variant="primaryGreen"
                                className="w-[5rem]"
                            >
                                Join
                            </Button>
                        </Link>
                    </div>
                    <div className="relative w-full">
                        <div className="min-w-[200px] h-[200px]">
                            <Image
                                src="/community2.svg"
                                alt="Community Image"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

