import axios from 'axios';
import React, {Component} from 'react';
import '../App.css';
import  {Button}  from './Button';
import './HeroSection.css';


export default function HeroSection() {



  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>GET A GREAT ADVENTURE</h1>
      <p>Why are you waiting for?</p>
      <p>Join With Us</p>
      <p>Please Login</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          Link to='/register'
         
        >
          REGISTER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          Link to='/login'
        >
          LOGIN <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}


//export default HeroSection;