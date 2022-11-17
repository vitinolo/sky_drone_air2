import React from 'react';

const Footer = () => {
    return (
        <div className='footerContent'>
            <div className="socialNetWorks"> 
                <div className="fb">
                    <a href=" https://www.facebook.com/profile.php?id=100087392714658" title="lien facebook" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-facebook'></i>
                    </a>                    
                </div>
                <div className="signature">
                    <p>© 2022 Tout droit réservé - sky drone air -</p>
                </div>
                <div className="yt">
                    <a href=" https://www.youtube.com/channel/UC9onhFCOxVpithnTSG8Gpkg" title="lien youtube" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-youtube'></i>
                    </a>      
                </div>   
            </div>
        </div>
    );
};

export default Footer;