import React from 'react';

function VideoTeaser() {
    return (
        <>
            <div className='video'>
                <iframe width="800" height="452" src="https://www.youtube.com/embed/VpHPaAHgYOY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    );
};

export default VideoTeaser;