import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/about';
import Footer from './components/Footer';
import CreateHemApp from './components/createhemapp';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <About />
      <CreateHemApp />
      <Footer />
    </div>
  );
};

export default App;