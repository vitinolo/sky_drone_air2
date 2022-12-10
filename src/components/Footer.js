import React from 'react';

const Footer = () => {
    return (
        <div className='footerContent'>
            <div className="socialNetWorks"> 
                <div className="fb" aria-label="lien facebook">
                    <a href=" https://www.facebook.com/profile.php?id=100087392714658" title="Cliquer vers facebook" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-facebook shake-horizontal'></i>
                    </a>                    
                </div>
                <div className="signature">
                    <p>© 2022 Tout droit réservé - sky drone air -</p>
                </div>
                <div className="yt" aria-label="lien youtube">
                    <a href=" https://www.youtube.com/channel/UC9onhFCOxVpithnTSG8Gpkg" title="Cliquer vers youtube" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-youtube shake-horizontal'></i>
                    </a>      
                </div>   
            </div>
        </div>
    );
};

export default Footer;