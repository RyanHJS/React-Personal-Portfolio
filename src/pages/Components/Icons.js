import React from 'react';
import { motion } from 'framer-motion';
import {
    AiFillGithub,
    AiFillLinkedin,
    AifillYoutube,
} from 'react-icons/ai';

const Icons = () => {
    return (
        <div className='py-10'>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <a href='https://www.linkedin.com/in/ryanhjs/' target="_blank">
                        <AiFillLinkedin className='cursor-pointer hover:bg-cyan-300 rounded-full' />
                    </a>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <a href='https://github.com/RyanHJS/' target="_blank">
                        <AiFillGithub className='cursor-pointer hover:bg-cyan-300 rounded-full' />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Icons;