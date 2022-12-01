import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="navigation">
                <img src="./medias/img/logo/logo_2_web.png" alt="logo de sky drone air"/>
                <NavLink style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/" title="Accueil">
                    <i className='fas fa-home'></i>
                    <span>Accueil</span>
                </NavLink>   
                <NavLink style={({ isActive }) => { return {color : isActive ? "red" : ""};}}exact="true" to="/Medias" title="Médias">
                    <i className='fas fa-video'></i>
                    <span>Médias</span>
                </NavLink>
                <NavLink style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/Contact" title="Contact">
                    <i className='fas fa-id-card'></i>
                    <span>Contact</span>
                </NavLink>
                <NavLink style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/Tarifs" title="Tarifs">
                    <i className='fas fa-euro-sign'></i>
                    <span>Tarifs</span>
                </NavLink>
                <NavLink style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/Materiel" title="Matériel">
                <i className="fas fa-toolbox"></i>
                    <span>Matériel</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;