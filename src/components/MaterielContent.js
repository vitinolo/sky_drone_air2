import React from 'react';

const MaterielContent = () => {
    return (
        <div className='materielcontent'>
            <div className='materiel'>    
                <div className='wrap'>
                    <img src="medias/img/materiel/poste_travail.webp" alt="poste de travail informatique"></img>
                    <span>Matériel informatique iMac et iPad.</span>
                </div>
                <div className='wrap'>
                    <span>Drones de marque Dji + fpv.</span>
                    <img src="medias/img/materiel/drone.webp" alt="poste de travail informatique"></img>
                </div>
                <div className='wrap'>
                    <img src="medias/img/materiel/casque.webp" alt="poste de travail informatique"></img>
                    <span>Casque Dji.</span>
                </div>
                <div className='wrap'>
                    <span>GoPro sur stabilisateur.</span>
                    <img src="medias/img/materiel/gopro.webp" alt="poste de travail informatique"></img>
                </div>
            </div>
            <div className='logiciel'>
                <h1>Logiciels</h1>
                <span>
                    Vidéo: final cut proX, Motion, Premier Adobe, After effect Adobe.
                </span>
                <span>
                    Photo: Photoshop Adobe, Lightroom.
                </span>
                <span>
                    Musique: GarageBang, sans droit.
                </span>
                <span>
                    Encodeur: MediaEncoder Adobe.
                </span>
            </div>
        </div>
    );
};

export default MaterielContent;