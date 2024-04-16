"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Props {
    logo: string;
    name: string;
    bank: string;
    icon: string;
    contact: number;
}

export const CouponCard = ({
    logo,
    name,
    bank,
    icon,
    contact,
}: Props) => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contact}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <motion.div className="flex items-center justify-between gap-x-4 h-15 bg-gray-100 p-2 rounded-md">
                <div className="flex items-center gap-x-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-200">
                        <Image
                            src={logo}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold text-sm">
                            {name}
                        </h4>
                        <p className="text-sm">
                            {bank}
                        </p>
                    </div>
                </div>
                <div className="">
                    <Icon icon={icon} fontSize={35} />
                </div>
            </motion.div>
        </a>
    )
}

