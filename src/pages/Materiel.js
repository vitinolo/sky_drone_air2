import React from 'react';
import Navigation from '../components/Navigation';
import MaterielContent from '../components/MaterielContent';
import Footer from '../components/Footer';

const Materiel = () => {
    return (
        <div className='materielPage'>
            <Navigation />
            <MaterielContent />
            <Footer />
        </div>
    );
};

export default Materiel;