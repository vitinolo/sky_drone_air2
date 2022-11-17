import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="navigation">
                <img src="./media/logo2web.jpg" alt="logo de sky drone air"/>
                <NavLink to="/" title="Accueil">
                    <i className='fas fa-home'></i>
                    <span>Accueil</span>
                </NavLink>   
                <NavLink to="/Medias" title="Médias">
                    <i className='fas fa-video'></i>
                    <span>Médias</span>
                </NavLink>
                <NavLink to="/Contact" title="Contact">
                    <i className='fas fa-id-card'></i>
                    <span>Contact</span>
                </NavLink>
                <NavLink to="/Tarifs" title="Tarifs">
                    <i className='fas fa-euro-sign'></i>
                    <span>Tarifs</span>
                </NavLink>
                <NavLink to="/Materiel" title="Matériel">
                <i className="fas fa-toolbox"></i>
                    <span>Matériel</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;