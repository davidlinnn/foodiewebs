import React from 'react';
import './Cardss.css';
import CardsItem from './CardsItem';

function Cardss() {
  return (
    <div className='cardss'>
      <div className='cardss__container'>
        <div className='cardss__wrapper'>
          <ul className='cardss__items'>
            <CardsItem
              src='images/img-9.jpg'
              text='Rendang, hidangan yang luar biasa dari dapur Minangkabau.'
              label='Culinary'
              path='/'
            />
            <CardsItem
              src='images/img-2.jpg'
              text='Sate Padang, kelezatan yang terbungkus dengan aroma rempah yang memikat indera.'
              label='Culinary'
              path='/'
            />
          </ul>
          <ul className='cardss__items'>
            <CardsItem
              src='images/img-3.jpg'
              text='Soto Padang, hidangan hangat yang memikat selera dengan cita rasa rempah-rempah khas Minang.'
              label='Culinary'
              path='/'
            />
            <CardsItem
              src='images/img-4.jpg'
              text='Gajeboh, camilan gurih yang menggoda dengan rempah-rempah khas Minang'
              label='Culinary'
              path='/'
            />
            </ul>
            <ul className='cardss__items'>
            <CardsItem
              src='images/img-8.jpg'
              text='Keripik Sanjai, gurihnya cita rasa tradisi Minangkabau dalam setiap gigitan'
              label='Culinary'
              path='/'
            />
            <CardsItem
              src='images/img-5.jpg'
              text='Dendeng Batokok, cita rasa tradisional yang menggugah selera.'
              label='Culinary'
              path='/'
            />
            </ul>
            <ul className='cardss__items'>
            <CardsItem
              src='images/img-6.jpg'
              text='Gulai itiak, sajian khas Minang yang memikat dengan paduan rempah-rempah dan daging bebek lembut.'
              label='Culinary'
              path='/'
            />
            <CardsItem
              src='images/img-15.jpg'
              text='Kalio Jengkol, hidangan khas dengan rempah-rempah yang kaya.'
              label='Culinary'
              path='/'
            />
          </ul>
          <ul className='cardss__items'>
            <CardsItem
              src='images/img-16.jpg'
              text='Nasi Sala, paduan nasi dan lauk khas Minang yang memikat hati'
              label='Culinary'
              path='/'
            />
            <CardsItem
              src='images/img-17.jpg'
              text='Ikan Asem Padeh, kuah asam segar yang menggugah selera dari Sumatera Barat.'
              label='Culinary'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardss;