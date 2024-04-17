"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";

export const icons = [
    {
        icon: "material-symbols-light:mail-outline",
        title: "Email Us",
        description: "mailto:akuent.info@gmail.com",
    },
    {
        icon: "material-symbols-light:call-outline",
        title: "Call Us",
        description: 'tel:+2348059941818',
    },
]

export const GetInTouch = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-max bg-gray-50 py-6"
        >
            <div className="max-w-[1200px] mx-auto px-3 h-full">
                <div className="flex lg:flex-row flex-col items-center justify-center h-full gap-8">
                    <div className="flex flex-col gap-y-3 flex-1">
                        <h4 className="text-lg font-bold">
                            Get in touch
                        </h4>
                        <p className="text-sm">
                            We&apos;re here to assist you with any questions, concerns, or feedback you may have.<br />
                            Your satisfaction and success with our platform are our top priorities.
                        </p>
                        <div className="flex flex-col gap-y-6 pt-8">
                            {icons.map(({ icon, description, title }) => (
                                <a
                                    href={description}
                                    key={title}
                                    className="flex items-center gap-x-4"
                                >
                                    <div className="w-[2rem] h-[2rem] flex items-center justify-center rounded-sm bg-green-500">
                                        <Icon icon={icon} fontSize={20} className="text-white" />
                                    </div>
                                    <div className="flex flex-col gap-x-4">
                                        <h4 className="font-bold text-sm">
                                            {title}
                                        </h4>
                                        <p className="text-sm font-normal">
                                            {description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex lg:self-end self-center relative w-[340px] h-[340px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                        <Image
                            src="/contact/phone.svg"
                            alt="phone"
                            fill
                            className=""
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

