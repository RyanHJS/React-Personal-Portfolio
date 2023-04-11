import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import avatar from '../../public/static/avatar.jpeg';
import web1 from '../../public/static/web1.png';
import web2 from '../../public/static/web2.png';
import favicon from '../../public/static/favicon.ico';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Projects from './Components/Projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            {/* Header */}
            <Head>
                <title>Ryan He Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            </Head>

            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

                {/* Section 1 */}
                <section className="min-h-screen">
                    {/* Nav bar */}
                    <motion.div key="navbar" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }}>
                        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    </motion.div>
                    {/* About me */}
                    <motion.div key="about" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }}>
                        <About Image={Image} avatar={avatar} />
                    </motion.div>

                </section>

                {/* Section 2 */}
                <section>
                    {/* My work Experience */}
                    <motion.div key="work" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }}>
                        <Work />
                    </motion.div>
                    {/* Portofolio */}
                    <motion.div key="project" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }}>
                        <Projects web1={web1} web2={web2} Image={Image} />
                    </motion.div>
                </section>

                {/* Footer */}
                <section>
                    <div className='pt-20'>
                        <p className="font-burtons text-xs text-center dark:text-gray-200">@2023 Ryan He</p>
                        <p className="font-burtons text-xs text-center dark:text-gray-200">With Inspiration From developedbyed</p>
                    </div>
                </section>
            </main>
        </div >
    );
}