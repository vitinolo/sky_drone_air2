import React from 'react';

const ContactContent = () => {
    return (
        <div className='contactcontent'>
            <article>
                    <h1>Sky Drone Air</h1>
                <p>
                    <span>1602 route de st Etienne du narais</span>
                    <span>72470 St Mars le Brière</span>
                    <span>Tel: 06.74.40.81.32</span>
                    <span> Mail: skydroneair@gmail.com</span>
                </p>
            </article>
            <div className="carte">
                <iframe title="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.565687008965!2d0.40325821570174025!3d48.00277997921297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e2f4087d8d5763%3A0x6265e355c2f2e066!2sSaint-%C3%89tienne%20du%20Narais%2C%2072470%20Saint-Mars-la-Bri%C3%A8re!5e0!3m2!1sfr!2sfr!4v1669393466126!5m2!1sfr!2sfr"></iframe>
            </div>
        </div>    
    );
};

export default ContactContent;