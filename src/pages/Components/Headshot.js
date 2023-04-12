import React from 'react';
import { motion } from 'framer-motion';

const Headshot = ({ avatar, Image }) => {
    return (
        <div>
            <div>

                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1, type: 'tween' }}
                >
                    <div
                        className="
                    mx-auto 
                    bg-gradient-to-b 
                    from-teal-500 
                    rounded-full 
                    w-80 
                    h-80 
                    relative 
                    overflow-hidden 
                    mt-20 
                    md:h-25 
                    md:w-25
                    "
                    >
                        <Image src={avatar} layout="fill" objectiveFit="cover" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Headshot;