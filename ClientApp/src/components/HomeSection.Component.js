import React, {Component} from 'react';
import axios from 'axios';
import  {Button}  from './MainPage/Button';
import './MainPage/HeroSection.css';



export default class HomeSection extends Component{
  


render(){

    if(this.props.user){
        return(
            <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h2>Hi {this.props.user.firstName} {this.props.user.lastName}</h2>
        <h2>Now You can Travel with us</h2>
            
        </div>
        )
    }

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
    )
}

}