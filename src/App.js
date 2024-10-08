import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LandscapeGallery from './components/LandscapeGallery';
import NatureGallery from './components/NatureGallery';
import PetsGallery from './components/PetsGallery';
import RuinsGallery from './components/RuinsGallery';
import BirdsGallery from './components/BirdGallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='landscape' element={<LandscapeGallery />} />
            <Route path='nature' element={<NatureGallery />} />
            <Route path='pets' element={<PetsGallery />} />
            <Route path='ruins' element={<RuinsGallery />} />
            <Route path='birds' element={<BirdsGallery />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
