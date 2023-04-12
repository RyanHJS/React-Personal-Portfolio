import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    return (
        <>
            <div className='min-h-screen pt-96 pb-96'>
                <div>
                    <h3 className='text-3xl font-medium pt-8 pb-2 dark:text-white'>My Work Experience</h3>
                    <h4 className='text-md pt-10 pb-2 leading-8 tet-gray-80 dark:text-gray-200 '>
                        SAP - Software Logistics Engineer (September 2021- May 2022)</h4>
                    <p className="text-md py-2 leading-8 text-gray-800 max-w-3xl dark:text-gray-200">I worked as a SAP iXp intern on the BTP Core Platform Services
                        team where I conducted system analysis, testing, and <span className='text-teal-500'>debugging</span>.
                        I also examined resource consumption in physical and <span className='text-teal-500'>virtual environments </span>
                        (VMware, PowerVM, etc) and optimized resource usage and response times.</p>
                    <p className="text-md py-2 leading-8 text-gray-800 max-w-3xl dark:text-gray-200">I am honoured to have been nominated by my manager to
                        join <span className='text-teal-500'>Fast Track</span> -  an initiative of SAP Internship Experience Program,
                        for success, high motivation and commitment during internship/working student time.</p>
                </div>
            </div>
        </>
    );
};

export default Work;