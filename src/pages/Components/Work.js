import React from 'react';
import { motion } from 'framer-motion';
import CardImage from './CardImage';
import CardText from './CardText';
import { Cardo } from 'next/font/google';
import Image from 'next/image';


const Work = ({ sapLogo }) => {

    let jobTitle = "Software Logistics Engineer (BTP Core Platform Services)";
    let jobDate = "September 2021- May 2022";
    let jobDescription =
        `
   SAP iXp intern on the BTP Core Platform Services team 
    where I conducted system analysis, testing, and  debugging. 
    I also examined resource consumption in physical and virtual
    environments(VMware, PowerVM, etc) and optimized resource usage and response times.
        `;

    let achievements =
        `
    I am honoured to have been nominated by my manager to join 
    Fast Track - an initiative of SAP Internship Experience Program, 
    for success, high motivation and commitment during internship/working student time.
    `;

    let tag1 = "debugging";
    let tag2 = "database";
    let tag3 = "linux";
    let showIcons = false;

    return (
        <>
            <section className='min-h-screen pt-20 pb-96'>

                <h2 className="text-3xl md:text-3xl text-center pt-20 pb-8 text-teal-600 font-semibold dark:text-teal-400">
                    My Work Experience</h2>

                <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap justify-center">

                    <CardImage
                        Image={Image}
                        imageSrc={sapLogo}
                        imageCaption={"imageCaption"}
                        imageTitle={jobTitle}
                        imageBody={jobDate}
                        tags={[tag1, tag2, tag3]}
                        showIcons={showIcons}
                    />


                    <CardText
                        textBody={jobDescription}
                    />

                    <CardText
                        textBody={achievements}
                    />


                </div>

            </section>
        </>
    );
};

export default Work;