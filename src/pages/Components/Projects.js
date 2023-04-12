import React from 'react';

const Projects = ({ web1, web2, Image }) => {
    return (
        <>
            <div className='min-h-screen pt-96 pb-20'>
                <div>
                    <h3 className='text-3xl  font-medium pt-8 pb-2 dark:text-white'>My Projects</h3>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
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
            </div>
        </>
    );
};

export default Projects;