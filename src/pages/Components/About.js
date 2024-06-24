import React from 'react';
import { motion } from 'framer-motion';
import Icons from './Icons';
import Headshot from './Headshot';
import Introduction from './Introduction';


const About = ({ avatar, Image }) => {
    return (
        <>
            <div className='min-h-screen pt-10 pb-96'>

                {/* Introduction */}
                <Introduction />

                {/* Icons */}
                <Icons />

                {/* 3D Image */}
                <Headshot avatar={avatar} Image={Image} />

            </div>
        </>
    );
};

export default About;