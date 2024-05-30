import React from 'react';
import { Link } from 'react-router-dom';

function CardsItem(props) {
  return (
    <>
      <li className='cardss__items'>
        <Link className='cardss__items__link' to={props.path}>
          <figure className='cardss__items__pic-wrap' data-category={props.label}>
            <img
              className='cardss__items__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cardss__items__info'>
            <h5 className='cardss__items__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardsItem;
