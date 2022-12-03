import React from 'react';
import VideoYt from './VideosYt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faAngleUp, faAngleDown }  from '@fortawesome/free-solid-svg-icons';

const MediasContent = () =>{
    return (
        <>
            <div className='mediascontent'>
                <a href="#start"><FontAwesomeIcon icon={ faAngleUp} /></a>
                <a href="#end"><FontAwesomeIcon icon={ faAngleDown} /></a>
                <VideoYt />        
            </div>        
        </>
    );
};

export default MediasContent;