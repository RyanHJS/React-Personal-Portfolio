import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ anchorLink, anchorTitle, handleMenuToggle, extraStyle }) => {


    return (
        <div>
            <li onClick={handleMenuToggle}>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                >
                    <a

                        className={`px-4 py-2 rounded-md ml-8 ${extraStyle ? extraStyle : ''}`}
                        href={anchorLink}
                    >
                        {anchorTitle}
                    </a>
                </motion.div>
            </li>
        </div>
    );
};

export default NavLink;