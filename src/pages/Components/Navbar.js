import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { useState } from 'react';


const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <div>
            <nav className="
            bg-white px-10 dark:bg-gray-900 dark:text-white 
            py-8 mb-12
            top-0 fixed z-50 w-full">

                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="font-burtons text-xl animate-bounce hidden sm:flex">Ryan He</h1>

                    <ul className="items-center hidden sm:flex">
                        <li>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                            </motion.div>
                        </li>
                        <NavLink anchorLink={'/static/resume.pdf'}
                            anchorTitle={'Resume'}
                            extraStyle={'bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white border-none'} />
                    </ul>
                </div>

                <div className="container mx-auto flex items-center justify-center">
                    <ul className="flex items-center justify-center">
                        <NavLink anchorLink={'#about'} anchorTitle={'About'} />
                        <NavLink anchorLink={'#work'} anchorTitle={'Work'} />
                        <NavLink anchorLink={'#project'} anchorTitle={'Project'} />
                    </ul>
                </div>
            </nav >
        </div >

    );
};

export default Navbar; 