import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Rendang, hidangan yang luar biasa dari dapur Minangkabau.'
              label='Culinary'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Sate Padang, kelezatan yang terbungkus dengan aroma rempah yang memikat indera.'
              label='Culinary'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Soto Padang, hidangan hangat yang memikat selera dengan cita rasa rempah-rempah khas Minang.'
              label='Culinary'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Gajeboh, camilan gurih yang menggoda dengan rempah-rempah khas Minang'
              label='Culinary'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Keripik Sanjai, gurihnya cita rasa tradisi Minangkabau dalam setiap gigitan'
              label='Culinary'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
