import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Most Popular Travelling Places</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/img-9.jpg'
              text='Visit in Anuradhapura'
              label='Sacred city'
          //    path='/Guider'
            />
            <CardItem
              src='image/img-10.jpg'
              text='Temple of the Tooth'
              label='Sacred Place'
              path='/FetchGuider'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='image/img-1.jpg'
              text='Sigiriya'
              label='Mystery'
              path='/FetchGuider'
            />
            <CardItem
              src='image/img-2.jpg'
              text='Travel in NuwaraEliya'
              label='Experience'
              path='/FetchGuider'
            />
            <CardItem
              src='image/img-3.jpg'
              text='Ravana Ella'
              label='Adventure'
              path='/FetchGuider'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;