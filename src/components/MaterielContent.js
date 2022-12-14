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
                    <span>Drones de marque Dji.</span>
                    <img src="medias/img/materiel/drone.webp" alt="poste de travail informatique"></img>
                </div>
                <div className='wrap'>
                    <img src="medias/img/materiel/casque.webp" alt="poste de travail informatique"></img>
                    <span>Casque de marque Dji.</span>
                </div>
                <div className='wrap'>
                    <span>GoPro sur stabilisateur.</span>
                    <img src="medias/img/materiel/gopro.webp" alt="poste de travail informatique"></img>
                </div>
            </div>
            <div className='logiciel'>
                <h1>Logiciels</h1>
                <span>
                    Vidéo: final cut proX, Premier Adobe, After effect Adobe.
                </span>
                <span>
                    Photo: Photoshop Adobe, Lightroom.
                </span>
                <span>
                    Musique: GarageBang.
                </span>
                <span>
                    Encodeur: MediaEncoder Adobe.
                </span>
            </div>
        </div>
    );
};

export default MaterielContent;