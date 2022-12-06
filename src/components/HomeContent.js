import React from 'react';
import VideoTeaser from './VideoTeaser';


const HomeContent = () => {
    return (
        <>
            <div className='homecontent'>
                <span className='title_site tracking-in-expand'><strong>Sky Drone Air</strong></span>
                <span className='sous_titre_site tracking-in-expand2'><strong>Prise de vue et montage</strong></span>
                <VideoTeaser/>
                <article> 
                        <span className='title_article'>Services:</span>
                        <div className='wrapper'>
                            <p>
                                <span><strong>Prise de vue sol et aérienne</strong></span>
                                <span><strong>Photos aériennes</strong></span>
                                <span><strong>Evènement "sport, loisir, familial"</strong></span>
                                <span><strong>Pub et Promotion</strong></span>
                            </p>
                            <p>
                                <span><strong>Teaser</strong></span>
                                <span><strong>Avec ou sans montage vidéo</strong></span>
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