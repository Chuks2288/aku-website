"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative min-h-[60vh]"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/about/hero.svg')" }}
            >
                <div className="absolute inset-0 bg-blue-800 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">
                        About Us
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}

