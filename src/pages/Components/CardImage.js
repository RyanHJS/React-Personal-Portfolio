import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

const CardImage = ({ Image, imageSrc, imageCaption, imageTitle, imageBody, tags, showIcons, showcaseLink, githubLink }) => {
    return (
        <>
            <div className='py-5'>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                >
                    <div class="max-w-md bg-white px-10 dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                        <Image class="h-36 w-full" src={imageSrc} alt={imageCaption} />
                        {showIcons ? (
                            <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}>
                                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                                    <a href={showcaseLink} target=" blank" rel="noreferrer">
                                        <BiLinkExternal className='cursor-pointer hover:bg-cyan-300 rounded-full dark:fill-white' />
                                    </a>

                                    <a href={githubLink} target=" blank" rel="noreferrer">
                                        <AiFillGithub className='cursor-pointer hover:bg-cyan-300 rounded-full dark:fill-white' />
                                    </a>
                                </div>
                            </motion.div>
                        ) : null
                        }
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-gray-800 dark:text-white">{imageTitle}</div>
                            <p class="text-gray-800 text-base dark:text-white" >
                                {imageBody}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            {tags.map((tag, index) => (
                                <span key={index} class="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div >

        </>
    );
};

export default CardImage;