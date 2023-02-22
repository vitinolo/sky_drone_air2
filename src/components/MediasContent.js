import React from 'react';
import VideoYt from './VideosYt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChurch, faPersonHiking, faPhotoFilm }  from '@fortawesome/free-solid-svg-icons';
import  { faAngleUp, faAngleDown }  from '@fortawesome/free-solid-svg-icons';

function MediasContent () {
    const videos = [
        {
          id: 1,
          type: 'patrimoine',
          source: "https://www.youtube.com/embed/2TAuBlrS3Rs",
          titre:"Pont romain",
        },
        {
          id: 2,
          type: 'patrimoine',
          source: "https://www.youtube.com/embed/fyPBLnQmBVc",
          titre:"Sillé le guillaume",
        },
        {
          id: 3,
          type: 'patrimoine',
          source: "https://www.youtube.com/embed/L8FdTSRFJIM",
          titre:"Finistère sud 2022",
        },
        {
          id: 4,
          type: 'sport',
          source: "https://www.youtube.com/embed/cJdSDT_gB70",
          titre:"GRP 2022 inside",
        },
        {
          id: 5,
          type: 'sport',
          source: "https://www.youtube.com/embed/5zzRzhRQuB4",
          titre:"GR20 juillet 2022",
        },
        {
          id: 6,
          type: 'sport',
          source: "https://www.youtube.com/embed/MjhDrLgyoC0",
          titre:"La Flèche 2022",
        },
        {
          id: 7,
          type: 'sport',
          source: "https://www.youtube.com/embed/a8V9njN6C3w",
          titre:"Puy du Fou",
        },
        {
          id: 8,
          type: 'sport',
          source: "https://www.youtube.com/embed/QGqdGI7Jx-k",
          titre:"Menestrail 2021",
        },
        {
          id: 9,
          type: 'sport',
          source: "https://www.youtube.com/embed/jn6OBmcJxGo",
          titre:"Grand Trail st Jacques 2022",
        },
        {
          id: 10,
          type: 'teasers',
          source: "https://www.youtube.com/embed/F6cOQDczDCA",
          titre:"Sky Drone Air",
        },
        {
          id: 11,
          type: 'teasers',
          source: "https://www.youtube.com/embed/OX44it5kcvA",
          titre:"Gîte la Vieuxville, gîte étape",
        },
        {
          id: 12,
          type: 'teasers',
          source: "https://www.youtube.com/embed/ZPOTzWukaWc",
          titre:"Adrenobscure 2fr 2019",
        },
        {
          id: 13,
          type: 'teasers',
          source: "https://www.youtube.com/embed/9IU86dcLhyM",
          titre:"Adrenobscure 2020",
        },
        {
          id: 14,
          type: 'teasers',
          source: "https://www.youtube.com/embed/SDO9Q0FMo8I",
          titre:"Adrenakids",
        },
        {
          id: 15,
          type: 'teasers',
          source: "https://www.youtube.com/embed/WpK8tKpWokA",
          titre:"Adrenobscure 2018",
        },
        {
          id: 16,
          type: 'teasers',
          source: "https://www.youtube.com/embed/wcFGYo1Ct8M",
          titre:"Adrenaraid 2017",
        },
        
      ];
    
    return (
        <>
            <div className='mediascontent'>
                <a href="#start"><FontAwesomeIcon icon={ faAngleUp} /></a>
                <a href="#end"><FontAwesomeIcon icon={ faAngleDown} /></a>
                <>
                    <div className='button-wrap'>
                        <a href="#patrimoine "><button  title="Afficher les vidéos">Patrimoine</button></a> 
                        <a href="#sport"><button title="Afficher les vidéos">Sport</button></a>
                        <a href="#teasers"><button title="Afficher les vidéos">Teasers</button></a>
                    </div>
                    <div className='videotheque' id="start">
                        
                        <div className='wrapper'id="patrimoine" >
                            <h1><FontAwesomeIcon icon={faChurch} />&nbsp;Patrimoine</h1>
                            <div className='videoWrap'>
                                {   videos
                                        .filter(video => video.type.includes('patrimoine'))
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
                        <div className='wrapper' id="sport">
                            <h1><FontAwesomeIcon icon={faPersonHiking} />&nbsp; Sport, événementiel</h1>
                            <div className='videoWrap'>
                                {   videos
                                        .filter(video => video.type.includes('sport'))
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
                        <div className='wrapper'id="teasers">
                            <h1><FontAwesomeIcon icon={faPhotoFilm} />&nbsp; Teasers</h1>
                            <div className='videoWrap' id="end">
                                {   videos
                                        .filter(video => video.type.includes('teasers'))
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
                    </div>
                </>
            </div>        
        </>
    );
};

export default MediasContent;