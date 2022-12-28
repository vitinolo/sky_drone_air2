import React from 'react';

const TarifsContent = () => {
    return (
        <div className='tarifscontent'>
            <div className='devisWrapper'>
                <h1>Devis et tarifs sur demande</h1>
                <p>Ouvrir le devis en PDF
                    <a href="./medias/devis/devis.pdf" title='ouvrir le devis en pdf'> Devis</a>.
                </p>
                <span>Veuillez nous contacter pour parfaire votre projet.</span>
                <img alt="devis" src="./medias/devis/devis.webp"></img>
            </div>
        </div>
    );
};

export default TarifsContent;