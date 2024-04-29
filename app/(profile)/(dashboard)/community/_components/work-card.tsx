
import { motion } from "framer-motion";

type Props = {
    title: string;
    text: string;
}

export const WorkCard = ({
    title,
    text,
}: Props) => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-full border-2 rounded-xl flex flex-col items-start justify-between p-6 pb-6 md:max-w-[310px] max-w-full">
            <h4 className="font-bold text-md">
                {title}
            </h4>
            <p className="text-sm">
                {text}
            </p>
        </motion.div>
    )
}

