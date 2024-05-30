import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Carousel.css';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className="img-hover-zoom">
      <Slider {...settings}>
        <div style={{width:"100%"}}>
          <img src='images/Joshua.jpg' alt="Joshua Kurniawan" style={{width:"100%"}} />
          <div className="slide-text">Christopher.Joshua.K 00000077020</div>
        </div>
        <div>
          <img src='images/gwech.jpg' alt="Fajar Chresty" />
          <div className="slide-text">Fajar Chresty Ang 00000077097</div>
        </div>
        <div>
          <img src='images/david.jpg' alt="David Lin" />
          <div className="slide-text">David Lin  00000078135</div>
        </div>
        <div>
          <img src='images/karen.jpg'alt="Karen Yapranata" />
          <div className="slide-text">Karen Yapranata 00000077116</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;