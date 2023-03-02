import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faAngleUp, faAngleDown }  from '@fortawesome/free-solid-svg-icons';
import Patrimoine from './Patrimoine';
import Teaser from './Teaser';
import Sport from './Sport';

function MediasContent () {
      const [visibility, setVisibility] = useState(false)
      const [visibility1, setVisibility1] = useState(false)
      const [visibility2, setVisibility2] = useState(false)

      function changeVisibility () {
          setVisibility(!visibility)
       }

      function changeVisibility1 () {
          setVisibility1(!visibility1)
       }

      function changeVisibility2 () {
          setVisibility2(!visibility2)
       }
    return (
        <>
            <div className='mediascontent'>
                <a href="#start"><FontAwesomeIcon icon={ faAngleUp} /></a>
                <a href="#end"><FontAwesomeIcon icon={ faAngleDown} /></a>
                <>
                    <div className='button-wrap' id="start">
                      <a href="#patrimoine"><button onClick={changeVisibility} title="Afficher les vidéos">Patrimoine</button></a> 
                      <a href="#sport"><button onClick={changeVisibility1} title="Afficher les vidéos">Sport</button></a>
                      <a href="#teasers"><button onClick={changeVisibility2} title="Afficher les vidéos">Teasers</button></a>
                    </div>
                    <div className='videotheque'>
                        {visibility &&<Patrimoine />}
                        {visibility1 &&<Sport />}
                        {visibility2 &&<Teaser />}
                        <div id="end"></div>
                    </div>
                </>
            </div>        
        </>
    );
};

export default MediasContent;