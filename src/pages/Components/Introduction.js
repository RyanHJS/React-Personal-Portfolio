import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div>
            <div className="text-center pt-28 px-20">

                <h2 className="text-5xl pt-20 pb-8 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    Hi! My name is Ryan He,</h2>

                <TypeAnimation
                    sequence={[
                        'I am a Computer Science Major ',
                        2000,
                        'I am a problem solver ',
                        2000,
                        'I am a lifelong learner ',
                        2000
                    ]}
                    wrapper="span"
                    cursor={true} // Display a blnking cursor after the typed text
                    repeat={Infinity}
                    className='text-2xl md:text-3xl py-2 dark:text-white '
                />

                <p className="text-md py-8 leading-8 md:text-xl max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
                    I'm a CS undergrad at SFU with an interest in full-stack development. <br />
                    I love diving into new technologies to broaden my knowledge and develop new skills to ovecome real-world challenges.
                </p>

                <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
                    Open to any interesting opportunities!
                </p>
            </div>
        </div>
    );
};

export default Introduction;