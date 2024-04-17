"use client";

import { motion } from "framer-motion";

export const FormBanner = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-[50vh] bg-green-700"
        >
            <div className="max-w-[1200px] mx-auto px-3 h-full">
                <div className="flex flex-col justify-center items-center text-white h-full gap-y-4">
                    <h3 className="font-bold text-xl text-center">
                        Send us a message
                    </h3>
                    <p className="text-sm">
                        Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

