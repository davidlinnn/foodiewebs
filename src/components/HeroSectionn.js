import React from 'react';
import '../App.css';
import './HeroSectionn.css';

function HeroSection() {
    return (
      <div className='heros-containerr'>
        <video className='vidiokonten' controls style={{ display: 'block', margin: 'auto' }} autoPlay>
              <source src="/videos/video-3.mp4" type="video/mp4" />
            </video>
       </div>
    );
  }
  
  export default HeroSection;