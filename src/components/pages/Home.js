import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Maps from '../maps'; 


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Maps/>
      <Footer />
    </>
  );
}

export default Home;