"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative min-h-[70vh]"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/contact/hero.svg')" }}
            >
                <div className="absolute inset-0 bg-blue-800 opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-y-4">
                    <h1 className="text-4xl font-bold ">
                        Contact Us
                    </h1>
                    <p className="text-sm">
                        Get in touch and let us know how we can help.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

