"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Banner = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative min-h-[65vh] mb-10"
        >
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/service/coinTree.svg')" }}
            >
                <div className="absolute inset-0 bg-[#EAFDF4] opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-8">
                    <h1 className="text-2xl font-bold text-center">
                        Begin your journey to financial empowerment <br /> today with AKU.
                    </h1>
                    <Link href="/getStarted">
                        <Button
                            variant="primaryGreen"
                            size="lg"
                        >
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

