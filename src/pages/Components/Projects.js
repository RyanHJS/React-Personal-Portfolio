import React from 'react';
import CardImage from './CardImage';
import Image from 'next/image';

import spotify from '../../../public/static/spotify.png'
import medminder from '../../../public/static/medminder_cropped.png';
import dineTogether from '../../../public/static/dineTogether.png';


const Projects = () => {
    let spotifyProjectTitle = 'Better Spotify';
    let spotifyProjectBody = 'Spotify Web App Clone with Lyrics';
    let spotifyTag1 = 'React.js';
    let spotifyTag2 = 'Node.js';
    let spotifyTag3 = 'Express.js';
    let spotifyTag4 = 'SpotifyAPI';
    let spotifyShowcaseLink = 'https://github.com/RyanHJS/React-Spotify-Clone';
    let spotifyGithubLink = 'https://github.com/RyanHJS/React-Spotify-Clone';

    let medminderProjectTitle = 'MEDMinder';
    let medminderProjectBody = 'Medicine reminder for PWD';
    let medminderTag1 = 'Java';
    let medminderTag2 = 'SQLite';
    let medminderTag3 = 'UI/UX';
    let medminderTag4 = 'Unit Testing';
    let medminderShowcaseLink = 'https://www.youtube.com/watch?v=76rF8YiiFrE';
    let medminderGithubLink = 'https://github.com/RyanHJS/MED-Minder';

    let restaurantPlannerProjectTitle = 'DineTogether';
    let restaurantPlannerProjectBody = 'Restaurant Planning Made Easy';
    let restaurantPlannerTag1 = 'Javascript';
    let restaurantPlannerTag2 = 'React';
    let restaurantPlannerTag3 = 'Firebase';
    let restaurantPlannerTag4 = 'GCP';
    let restaurantPlannerShowcaseLink = 'https://github.com/RyanHJS/Restaurant-Planner';
    let restaurantPlannerGithubLink = 'https://github.com/RyanHJS/Restaurant-Planner';

    return (
        <>
            <section className='min-h-screen pt-20 pb-96'>
                <h2 className="text-3xl md:text-3xl text-center pt-20 pb-8 text-teal-600 font-semibold dark:text-teal-400">
                    My Projects</h2>
                <div>
                    <div className="max-w-screen flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
                        <div className="flex-basis-1/3 ">

                            <CardImage
                                imageSrc={dineTogether}
                                imageCaption={restaurantPlannerProjectTitle}
                                imageTitle={restaurantPlannerProjectTitle}
                                imageBody={restaurantPlannerProjectBody}
                                tags={[restaurantPlannerTag1, restaurantPlannerTag2, restaurantPlannerTag3, restaurantPlannerTag4]}
                                showIcons={true}
                                showcaseLink={restaurantPlannerShowcaseLink}
                                githubLink={restaurantPlannerGithubLink}
                            />
                        </div>
                        <div className="flex-basis-1/3 ">

                            <CardImage
                                imageSrc={spotify}
                                imageCaption={spotifyProjectTitle}
                                imageTitle={spotifyProjectTitle}
                                imageBody={spotifyProjectBody}
                                tags={[spotifyTag1, spotifyTag2, spotifyTag3, spotifyTag4]}
                                showIcons={true}
                                showcaseLink={spotifyShowcaseLink}
                                githubLink={spotifyGithubLink}
                            />
                        </div>
                        <div className="flex-basis-1/3 ">

                            <CardImage
                                imageSrc={medminder}
                                imageCaption={medminderProjectTitle}
                                imageTitle={medminderProjectTitle}
                                imageBody={medminderProjectBody}
                                tags={[medminderTag1, medminderTag2, medminderTag3, medminderTag4]}
                                showIcons={true}
                                showcaseLink={medminderShowcaseLink}
                                githubLink={medminderGithubLink}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;