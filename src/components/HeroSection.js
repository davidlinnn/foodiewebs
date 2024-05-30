import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Clock from './clock'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Take a look at various typical West Sumatran foods!</h1>
      <p>What are you waiting for?</p>
      <div className='clock-location'>
        <Clock />
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
