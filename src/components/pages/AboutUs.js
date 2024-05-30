import React from 'react';
import '../../App.css';
import Carousel from '../Carousel';
import OurBackground from '../OurBackground';
import Footer2 from '../Footer2';
import FeedBack from '../FeedBack'; 

export default function AboutUs() {
  return (
    <>
      <OurBackground />
      <Carousel />
      <FeedBack />  
      <Footer2 />
    </>
  );
}
