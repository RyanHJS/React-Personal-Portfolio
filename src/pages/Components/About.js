import React from 'react';
import {
    AiFillGithub,
    AiFillLinkedin,
    AifillYoutube,
} from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import MotionWrap from '../Wrappers/MotionWrap';


const About = ({ avatar, Image }) => {
    return (
        <>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Hi! My name is Ryan He,</h2>
                {/* <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Computer Science Major</h3> */}
                <TypeAnimation
                    sequence={[
                        'I am a Computer Science Major ',
                        2000,
                        'I am a problem solver ',
                        2000,
                        'I am a lifelong learner ',
                        2000
                    ]}
                    wrapper="span"
                    cursor={true} // Display a blnking cursor after the typed text
                    repeat={Infinity}
                    className='text-2xl py-2 dark:text-white md:text-3xl'
                />
                <p className="text-md py-8 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200">
                    I'm a CS undergrad at SFU with an interest in full-stack development. <br />
                    I love diving into new technologies to broaden my knowledge and develop new skills to ovecome real-world challenges.

                </p>
                <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
                    Open to any interesting opportunities!
                </p>
            </div>

            {/* Icons */}
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

            {/* 3D Image */}
            <div>

                <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1, type: 'tween' }}>
                    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-25 md:w-25">
                        <Image src={avatar} layout="fill" objectiveFit="cover" />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default About;;