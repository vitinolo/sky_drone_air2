import React from 'react';
import VideoYt from './VideosYt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChurch }  from '@fortawesome/free-solid-svg-icons';

const Patrimoine = () => {
    const patrimoines = [
        {
          id: 3,
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
          id: 1,
          type: 'patrimoine',
          source: "https://www.youtube.com/embed/L8FdTSRFJIM",
          titre:"Finistère sud 2022",
        },
      ];
    return (
        <div className='wrapper'id="patrimoine" >
            <h1><FontAwesomeIcon icon={faChurch} />&nbsp;Patrimoine</h1>
            <div className='videoWrap'>
                {   patrimoines
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

export default Patrimoine;