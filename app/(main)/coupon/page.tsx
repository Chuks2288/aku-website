"use client";

import { motion } from "framer-motion";

import { CouponCard } from "./_components/coupon-card";
import { coupons } from "@/constant";



const CouponPage = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-max py-6"
        >
            <div className="max-w-[1200px] mx-auto px-3 h-full space-y-10 flex flex-col justify-center items-center">
                <h2 className="font-bold text-xl text-center">
                    Purchase a coupon code from any of the vendors enlisted here
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-8 w-full">
                    {coupons.map(({ logo, name, bank, icon, contact }) => (
                        <CouponCard
                            key={name}
                            logo={logo}
                            name={name}
                            bank={bank}
                            icon={icon}
                            contact={contact}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default CouponPage