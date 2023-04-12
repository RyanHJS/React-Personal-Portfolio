import { motion } from 'framer-motion';
import React from 'react';


const CardText = ({ textTitle, textBody }) => {
    return (
        <>
            <div className='min-h-fit'>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                >
                    <div class="max-w-xl bg-white px-10 dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden max-h-fit">

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-gray-800 dark:text-white"> {textTitle ? textTitle : ""}
                            </div>
                            <p class="text-gray-800 text-base dark:text-white">
                                {textBody}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </>
    );
};

export default CardText;