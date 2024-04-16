"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-[90vh] 2xl:h-[50vh]"
        >
            <div className="max-w-[1200px] mx-auto h-full">
                <div className="flex flex-1 lg:flex-row flex-col justify-between w-full h-full gap-4">
                    <div className="flex items-center lg:justify-start justify-center flex-1 lg:max-w-[470px]">
                        <h1 className="font-bold lg:text-4xl text-2xl text-blue-800">
                            Our <br /> Services
                        </h1>
                    </div>
                    <div className="relative flex flex-1">
                        <div className="absolute top-0  lg:left-0 -left-10 lg:w-[310px] w-[280px] lg:h-[400px] h-[200px]">

                            <Image
                                src="/service/hero1.svg"
                                alt="Hero"
                                fill
                                className="object-fit"
                            />
                        </div>
                        <div className="absolute bottom-0 lg:-right-20 -right-10 lg:w-[310px] w-[280px] lg:h-[400px] h-[200px]">

                            <Image
                                src="/service/hero2.svg"
                                alt="Hero"
                                fill
                                className="object-fit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
