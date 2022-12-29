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
                        <div className='title_article'></div>
                        <div className='wrapper'>
                            <p>
                                <span><strong>Prise de vue</strong>&nbsp;sol et aérienne</span>
                                <span><strong>Photos aériennes</strong></span>
                                <span><strong>Evènements</strong>&nbsp;"sport, loisir, familial"</span>
                                <span><strong>Pub</strong>&nbsp;et&nbsp;<strong>Promotion</strong></span>
                            </p>
                            <p>
                                <span><strong>Teaser</strong></span>
                                <span>Avec ou sans&nbsp;<strong>montage vidéo</strong></span>
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