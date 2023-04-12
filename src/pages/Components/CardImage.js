import React from 'react';
import { motion } from 'framer-motion';

const CardImage = ({ Image, imageSrc, imageCaption, imageTitle, imageBody, tag1, tag2, tag3 }) => {
    return (
        <>
            <div className='py-5'>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                >
                    <div class="max-w-lg bg-white px-10 dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                        <Image class="w-full" src={imageSrc} alt={imageCaption} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-gray-800 dark:text-white">{imageTitle}</div>
                            <p class="text-gray-800 text-base dark:text-white" >
                                {imageBody}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #{tag1}
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #{tag2}
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #{tag3}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

        </>
    );
};

export default CardImage;