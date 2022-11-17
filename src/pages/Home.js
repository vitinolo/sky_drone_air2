import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';

const Home = () => {
    return (
        <div className='homePage'>        
                <Navigation />
                <HomeContent />
                <Footer />         
        </div>
    );
};

export default Home;