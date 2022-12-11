import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChurch, faPersonHiking, faPhotoFilm }  from '@fortawesome/free-solid-svg-icons';

function VideosYt() {
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2TAuBlrS3Rs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Pont romain</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fyPBLnQmBVc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Sillé le Guillaume</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/L8FdTSRFJIM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Finistère sud 2022</span>
                    </div>
                </div>
                <div className='wrapper' id="sport">
                    <h1><FontAwesomeIcon icon={faPersonHiking} />&nbsp; Sport, evénementiel</h1>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cJdSDT_gB70" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>GRP 2022 inside</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5zzRzhRQuB4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>GR20 juillet 2022</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MjhDrLgyoC0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>La Flèche 2022</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/a8V9njN6C3w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Puy du Fou</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QGqdGI7Jx-k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Menestrail 2021</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/jn6OBmcJxGo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Grand Trail st Jacques 2022</span>
                    </div>
                </div>
                <div className='wrapper'id="teasers">
                    <h1><FontAwesomeIcon icon={faPhotoFilm} />&nbsp; Teasers</h1>
                    <div className='videoWrap' id="end">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/F6cOQDczDCA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Sky Drone Air</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZPOTzWukaWc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Adrenobscure 2fr 2019</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9IU86dcLhyM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Adrenobscure 2020</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SDO9Q0FMo8I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Adrenakids</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WpK8tKpWokA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Adrenobscure 2018</span>
                    </div>
                    <div className='videoWrap'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wcFGYo1Ct8M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <span>Adrenaraid 2017</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideosYt;