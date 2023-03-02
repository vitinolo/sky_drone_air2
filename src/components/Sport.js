import React from 'react';
import VideoYt from './VideosYt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faPersonHiking }  from '@fortawesome/free-solid-svg-icons';

const Sport = () => {
    const sports =[
        {
            id: 6,
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
            id: 4,
            type: 'sport',
            source: "https://www.youtube.com/embed/MjhDrLgyoC0",
            titre:"La Flèche 2022",
          },
          {
            id: 3,
            type: 'sport',
            source: "https://www.youtube.com/embed/a8V9njN6C3w",
            titre:"Puy du Fou",
          },
          {
            id: 2,
            type: 'sport',
            source: "https://www.youtube.com/embed/QGqdGI7Jx-k",
            titre:"Menestrail 2021",
          },
          {
            id: 1,
            type: 'sport',
            source: "https://www.youtube.com/embed/jn6OBmcJxGo",
            titre:"Grand Trail st Jacques 2022",
          },
    ];
    return (
        <div className='wrapper'id="sport" >
            <h1><FontAwesomeIcon icon={faPersonHiking} />&nbsp;Sports</h1>
            <div className='videoWrap'>
                {   sports
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

export default Sport;