import React from 'react';
import { Routes, Route } from'react-router-dom';
import Home from'./pages/Home';
import Contact from'./pages/Contact';
import Materiel from'./pages/Materiel';
import Medias from'./pages/Medias';
import Tarifs from'./pages/Tarifs';
import NotFound from'./pages/NotFound';

const App = () => {
  return (
   <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Materiel" element={<Materiel/>}/>
        <Route path="/Medias" element={<Medias/>}/>
        <Route path="/Tarifs" element={<Tarifs/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
   </>
  );
};

export default App;