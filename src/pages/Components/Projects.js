import React from 'react';
import CardImage from './CardImage';
import Image from 'next/image';


const Projects = ({ spotify, medminder }) => {
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

    return (
        <>
            <section className='min-h-screen pt-20 pb-96'>
                <h2 className="text-3xl md:text-3xl text-center pt-20 pb-8 text-teal-600 font-semibold dark:text-teal-400">
                    My Projects</h2>
                <div>
                    <div className="max-w-screen flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
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