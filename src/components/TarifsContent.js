import React from 'react';
import tarifsPdf from '../documents/tarifs-web.pdf';

const TarifsContent = () => {
    return (
        <div className='tarifscontent'>
            <div className='devisWrapper'>
                <h1>Devis et tarifs sur demande</h1>
                <a href={tarifsPdf}  aria-label="lien tarifs" target="blank" title='télécharger tarifs'><img alt="tarifs" src="./medias/devis/tarifs.webp"></img></a>
            </div>
        </div>
    );
};

export default TarifsContent;