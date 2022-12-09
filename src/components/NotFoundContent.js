import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundContent = () => {
    return (
        <div className='notFound-content'>
            <h1>La page est introuvable</h1>
            <NavLink  to="/">
                    <i className='fas fa-home'></i>
                    <span> Accueil</span>
            </NavLink>
        </div>
    );
};

export default NotFoundContent;