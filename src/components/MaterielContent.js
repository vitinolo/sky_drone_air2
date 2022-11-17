import React from 'react';

const MaterielContent = () => {
    return (
        <div className='materielcontent'>
            <div className='materiel'>
                <h1>Matériel</h1>
                <div className='descrip'>
                    <div className='wrap'>
                        <img src="medias/img/materiel/poste_travail.jpg" alt="poste de travail informatique"></img>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum et ex ut ad accusantium, expedita vitae error commodi dolore sunt provident voluptate enim aut nisi.</span>
                    </div>
                </div>
                <div className='descrip'>
                    <div className='wrap'>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio repellat dolor dignissimos doloremque, ad possimus nihil corporis tempora earum, tempore reprehenderit accusantium voluptatum eum quas!</span>
                        <img src="medias/img/materiel/drone.jpg" alt="poste de travail informatique"></img>
                    </div>
                </div>
                <div className='descrip'>
                    <div className='wrap'>
                        <img src="medias/img/materiel/casque.jpg" alt="poste de travail informatique"></img>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error dignissimos officia est labore beatae, corrupti animi corporis quod impedit, illo, tenetur ducimus! Nobis, id!</span>
                    </div>
                </div>
                <div className='descrip'>
                    <div className='wrap'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti minima assumenda asperiores debitis voluptates ab beatae, maxime vitae animi velit natus necessitatibus nam aspernatur.</span>
                        <img src="medias/img/materiel/Gopro.jpg" alt="poste de travail informatique"></img>
                    </div>
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