import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl animate-bounce">Ryan He</h1>
                <ul className="flex items-center">
                    <li>
                        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                            <a
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                href='#work'
                            >
                                Resume
                            </a>
                        </motion.div>
                    </li>
                </ul>
            </nav >
        </>

    );
};

export default Navbar; 