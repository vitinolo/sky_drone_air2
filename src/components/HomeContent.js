import React from 'react';
import VideoTeaser from './VideoTeaser';


const HomeContent = () => {
    return (
        <>
            <div className='homecontent'>
                <span className='title_site tracking-in-expand'>Sky Drone Air</span>
                <span className='sous_titre_site tracking-in-expand2'>Prise de vue et montage</span>
                <VideoTeaser/>
                <article> 
                        <span className='title_article'>Services:</span>
                        <div className='wrapper'>
                            <p>
                                <span>Prise de vue sol et aérienne</span>
                                <span>Photos aériennes</span>
                                <span>Evènement "sport, loisir, familial"</span>
                                <span>Pub et Promotion</span>
                            </p>
                            <p>
                                <span>Teaser</span>
                                <span>Avec ou sans montage vidéo</span>
                                <span>Devis sur demande par mail</span> 
                                <span><a href="mailto:skydroneair@gmail.com">skydroneair@gmail.com</a></span>
                            </p>
                        </div>
                </article>
            </div>
        </>
    );
};

export default HomeContent;