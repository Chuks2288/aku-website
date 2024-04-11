"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const AboutUs = () => {

    return (
        <motion.div
            className="h-max bg-gray-100 p-2"
        >
            <motion.div
                whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex md:flex-row flex-col-reverse items-center px-3 py-6 justify-between max-w-[1200px] mx-auto flex-1 w-full gap-7"
            >
                <div className="relative w-[340px] h-[340px] lg:w-[400px] lg:h-[350px] mb-8 lg:mb-0">
                    <Image
                        src="/home/about.svg"
                        fill
                        alt="Hero"
                    />
                </div>

                <div className="max-w-[500px] space-y-4 flex flex-col">
                    <h1 className="text-xl lg:text-2xl font-bold tracking-widest leading-[50px]">
                        About Us
                    </h1>
                    <p className="text-sm">
                        At AKU, we are more than a financial platform—we are your dedicated partner on the journey to financial empowerment. Founded on the belief that everyone deserves the opportunity to build wealth, AKU is committed to providing a gateway to financial success.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

