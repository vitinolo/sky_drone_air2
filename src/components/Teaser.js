import React from 'react';
import VideoYt from './VideosYt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faPhotoFilm }  from '@fortawesome/free-solid-svg-icons';

const Teaser = () => {
    const teasers = [
        {
            id: 11,
            type: 'teasers',
            source: "https://www.youtube.com//embed/SuuZzXTWtpg",
            titre:"Almost GOOD Live Session 2023",
        },
        {
            id: 10,
            type: 'teasers',
            source: "https://www.youtube.com/embed/j0taG2FP4CQ",
            titre:"Marco polo 2022 mercedes benz",
        },
        {
            id: 9,
            type: 'teasers',
            source: "https://www.youtube.com/embed/mca2P-e4eUw",
            titre:"sky drone air sur le GR10",
        },
        {
            id: 8,
            type: 'teasers',
            source: "https://www.youtube.com/embed/GdrKG47PjaE",
            titre:"teaser Gr 20 montage et réalisation",
        },
        {
            id: 7,
            type: 'teasers',
            source: "https://www.youtube.com/embed/F6cOQDczDCA",
            titre:"Sky Drone Air",
        },
        {
            id: 6,
            type: 'teasers',
            source: "https://www.youtube.com/embed/OX44it5kcvA",
            titre:"Gîte la Vieuxville, gîte étape",
        },
        {
            id: 5,
            type: 'teasers',
            source: "https://www.youtube.com/embed/ZPOTzWukaWc",
            titre:"Adrenobscure 2fr 2019",
        },
        {
            id: 4,
            type: 'teasers',
            source: "https://www.youtube.com/embed/9IU86dcLhyM",
            titre:"Adrenobscure 2020",
        },
        {
            id: 3,
            type: 'teasers',
            source: "https://www.youtube.com/embed/SDO9Q0FMo8I",
            titre:"Adrenakids",
        },
        {
            id: 2,
            type: 'teasers',
            source: "https://www.youtube.com/embed/WpK8tKpWokA",
            titre:"Adrenobscure 2018",
        },
        {
            id: 1,
            type: 'teasers',
            source: "https://www.youtube.com/embed/wcFGYo1Ct8M",
            titre:"Adrenaraid 2017",
        },
    ]
    return (
        <div className='wrapper'id="teasers" >
            <h1><FontAwesomeIcon icon={faPhotoFilm} />&nbsp;Teasers</h1>
            <div className='videoWrap'>
                {  teasers
                        .map((video) =>(
                                <VideoYt
                                    key={video.id}
                                    type={video.type}
                                    source={video.source}
                                    titre={video.titre}
                                />        
                            ))
                },
            </div>
        </div>
    );
};

export default Teaser;