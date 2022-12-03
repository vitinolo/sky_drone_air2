import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChurch, faPersonHiking, faPhotoFilm }  from '@fortawesome/free-solid-svg-icons';

function VideosYt() {
    const externalSource1 = 'https://www.youtube.com/watch?v=ZPOTzWukaWc';
    const externalSource2 = 'https://www.youtube.com/watch?v=9IU86dcLhyM';
    const externalSource3 = 'https://www.youtube.com/watch?v=SDO9Q0FMo8I';
    const externalSource4 = 'https://www.youtube.com/watch?v=WpK8tKpWokA';
    const externalSource5 = 'https://www.youtube.com/watch?v=wcFGYo1Ct8M';
    const externalSource6 = 'https://www.youtube.com/watch?v=fyPBLnQmBVc';
    const externalSource7 = 'https://www.youtube.com/watch?v=MjhDrLgyoC0';
    const externalSource8 = 'https://www.youtube.com/watch?v=a8V9njN6C3w';
    const externalSource9 = 'https://www.youtube.com/watch?v=cJdSDT_gB70';
    const externalSource10 = 'https://www.youtube.com/watch?v=5zzRzhRQuB4';
    const externalSource11 = 'https://www.youtube.com/watch?v=L8FdTSRFJIM';
    const externalSource12 = 'https://www.youtube.com/watch?v=QGqdGI7Jx-k';
    const externalSource13 = 'https://www.youtube.com/watch?v=jn6OBmcJxGo';
    const externalSource14 = 'https://www.youtube.com/watch?v=2TAuBlrS3Rs';
    
    return (
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
                        <ReactPlayer url={externalSource14} 
                            controls
                            className="player-video"
                        />
                        <span>Pont romain</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource6} 
                            controls
                            className="player-video"
                        />
                        <span>Sillé le Guillaume</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource11} 
                            controls
                            className="player-video"
                        />
                        <span>Finistère sud 2022</span>
                    </div>
                </div>
                <div className='wrapper' id="sport">
                    <h1><FontAwesomeIcon icon={faPersonHiking} />&nbsp; Sport, evénementiel</h1>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource9} 
                            controls
                            className="player-video"
                        />
                        <span>GRP 2022 inside</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource10} 
                            controls
                            className="player-video"
                        />
                        <span>GR20 juillet 2022</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource7} 
                            controls
                            className="player-video"
                        />
                        <span>La Flèche 2022</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource8} 
                            controls
                            className="player-video"
                        />
                        <span>Puy du Fou</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource12} 
                            controls
                            className="player-video"
                        />
                        <span>Menestrail 2021</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource13} 
                            controls
                            className="player-video"
                        />
                        <span>Grand Trail st Jacques 2022</span>
                    </div>
                </div>
                <div className='wrapper'id="teasers">
                    <h1><FontAwesomeIcon icon={faPhotoFilm} />&nbsp; Teasers</h1>
                    <div className='videoWrap' id="end">
                        <ReactPlayer url={externalSource1} 
                            controls
                            className="player-video"
                        />
                        <span>Adrenobscure 2fr 2019</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource2} 
                            controls
                            className="player-video"
                        />
                        <span>Adrenobscure 2020</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource3} 
                            controls
                            className="player-video"
                        />
                        <span>Adrenakids</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource4} 
                            controls
                            className="player-video"
                        />
                        <span>Adrenobscure 2018</span>
                    </div>
                    <div className='videoWrap'>
                        <ReactPlayer url={externalSource5} 
                            controls
                            className="player-video"
                        />
                        <span>Adrenaraid 2017</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideosYt;