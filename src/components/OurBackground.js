import React from 'react';
import '../components/OurBackground.css';

function OurBackground() {
  return (
    <div className="hero-karen AboutUs">
      <video className="hero-video" autoPlay muted loop>
        <source src="/public/videos/video-3.mp4" type="video/mp4" />
        
      </video>
      <h1>Hi, Welcome to About Us!</h1>
      <p>
        Hi!, we are UMN students. We made this project so that we can preserve Indonesian culture, especially traditional food typical of West Sumatra (Padang). And below you can see the members of our group.
      </p>
    </div>

    
  );



}

export default OurBackground;
