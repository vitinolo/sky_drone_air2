import React from 'react';

function VideosYt({source, titre}) {
    return (                
            <div className='videoWrap'>
                <iframe width="560" height="315" src={source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <span>{titre}</span>
            </div>                     
    );
};

export default VideosYt;