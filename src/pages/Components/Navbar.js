import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <div>
            <nav className="
            bg-white px-10 dark:bg-gray-900 dark:text-white 
            py-8 mb-12
            top-0 fixed z-50 w-full">
                <div className="container mx-auto flex items-center justify-between">

                    <h1 className="font-burtons text-xl animate-bounce">Ryan He</h1>
                    <ul className="flex items-center">
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <a
                                    className="px-4 py-2 rounded-md ml-8"
                                    href='#about'
                                >
                                    About
                                </a>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <a
                                    className="px-4 py-2 rounded-md ml-8 "
                                    href='#work'
                                >
                                    Work
                                </a>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <a
                                    className="px-4 py-2 rounded-md ml-8 "
                                    href='#project'
                                >
                                    Project
                                </a>
                            </motion.div>
                        </li>

                    </ul>

                    <ul className="flex items-center">
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <a
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                    href='/static/resume.pdf'
                                >
                                    Resume
                                </a>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar; 