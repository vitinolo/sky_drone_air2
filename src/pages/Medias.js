import React from 'react';
import Navigation from '../components/Navigation';
import MediasContent from '../components/MediasContent';
import Footer from '../components/Footer';

const Medias = () => {
    return (
        <div className='mediasPage'>
            <Navigation />
            <MediasContent />
            <Footer />
        </div>
    );
};

export default Medias;