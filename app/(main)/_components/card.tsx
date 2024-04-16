import { Icon } from '@iconify/react';

import { motion } from "framer-motion";

type Props = {
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
            className='h-full border-2 rounded-xl flex flex-col items-center justify-between p-6 pb-6 min-h-[240px] min-w-[250px]'>
            <div className="">
                <Icon icon={icon} fontSize={25} />
            </div>
            <h4 className='font-bold text-md'>
                {title}
            </h4>
            <p className='text-center font-normal text-sm'>
                {description}
            </p>
        </motion.div>
    )
}