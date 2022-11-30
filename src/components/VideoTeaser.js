import React from 'react';
import ReactPlayer from 'react-player';

function VideoTeaser() {
    const externalSource = 'https://youtu.be/b2MOk3MwZxI';
    return (
        <>
            <div className='video'>
                <ReactPlayer url={externalSource} 
                    controls
                    playing
                    loop
                    className="player-video"
                />
            </div>
        </>
    );
};

export default VideoTeaser;