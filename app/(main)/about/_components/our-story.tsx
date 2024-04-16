"use client";

import { motion } from "framer-motion";

export const OurStory = () => {

    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-[70vh] 2xl:h-[50vh] bg-white px-3"
        >
            <div className="relative flex items-center justify-center">
                <div className="absolute top-[-3rem] sm:min-w-[33rem] min-w-full min-h-max bg-[#F3F7FC] rounded-tl-[6rem] rounded-br-[6rem] py-10">
                    <div className="text-left max-w-[33rem] px-10 space-y-4">
                        <h2 className="font-bold lg:text-3xl text-xl text-center">
                            Our Story
                        </h2>
                        <div className="text-xs text-justify">
                            <p>
                                At AKU, we are woven with passion, purpose, and a profound belief in the transformative power of financial empowerment. It all began with a vision—a vision that everyone, regardless of background or circumstance, should have the tools and opportunities to build a secure and prosperous future.
                            </p>
                            <p className="mt-4">
                                Founded by a team of dedicated individuals with diverse expertise, AKU emerged from a shared commitment to redefine the way we approach financial well-being. United by the idea that financial literacy is not just a skill but a gateway to endless possibilities, we set out to create more than just a platform—we envisioned a community.
                                From the very beginning, AKU has been a testament to the collective effort of like-minded individuals driven by a common goal. We believe in the impact of financial education, the power of informed investments, and the strength of a supportive community.
                            </p>
                            <p className="mt-4">
                                Our journey is marked by innovation, collaboration, and an unwavering dedication to your financial success. As we continue to evolve, our commitment to providing a comprehensive and empowering financial experience remains steadfast.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

