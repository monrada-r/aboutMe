import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Travels from './Pages/Travels';
import Pet from './Pages/Pet';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';

import './App.css';

function App() {

  return (
    <>
      <Nav />
      <SubNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  )
}

export default App
