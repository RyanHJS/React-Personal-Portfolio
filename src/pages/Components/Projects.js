import React from 'react';

const Projects = ({ web1, web2, Image }) => {
    return (
        <>
            <section className='min-h-screen pt-20 pb-96'>
                <h2 className="text-3xl md:text-3xl text-center pt-20 pb-8 text-teal-600 font-semibold dark:text-teal-400">
                    My Projects</h2>
                <div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;