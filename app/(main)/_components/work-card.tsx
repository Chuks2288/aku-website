import { Icon } from "@iconify/react";

import { motion } from "framer-motion";

type Props = {
    icon: string;
    title: string;
    text: string;
}

export const WorkCard = ({
    icon,
    title,
    text,
}: Props) => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-[#EAFDF4] h-full border-2 rounded-xl flex flex-col items-start justify-between p-6 pb-6 min-h-[200px] min-w-[220px]">
            <div className="h-7 w-7 rounded-full flex items-center justify-center bg-[#2AB474]">
                <Icon icon={icon} fontSize={15} className="text-white" />
            </div>
            <h4 className="font-bold text-md text-[#2AB474]">
                {title}
            </h4>
            <p className="text-sm">
                {text}
            </p>
        </motion.div>
    )
}

