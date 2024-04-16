
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Props {
    icon: string;
    title: string;
    description: string;
}


export const Card = ({
    icon,
    title,
    description
}: Props) => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-full p-4 pb-4 min-h-max min-w-[250px] flex items-start gap-x-2"
        >
            <span>
                <Icon icon={icon} fontSize={18} />
            </span>
            <div className="flex flex-col gap-y-1">
                <h3 className="text-sm font-semibold mb-2 text-blue-800">
                    {title}
                </h3>
                <p className="text-sm">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

