import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
  return (
    <>
      <li className='card__items'>
        <Link className='card__items__link' to={props.path}>
          <figure className='card__items__pic-wrap' data-category={props.label}>
            <img
              className='card__items__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='card__items__info'>
            <h5 className='card__items__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
