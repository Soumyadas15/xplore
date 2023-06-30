import React from 'react';
import '../styles/Landing.css';
import Carousel from '../components/Carousel'
import video from '../assets/background.mp4';
import Dest from './Dest';
import FlightText from '../components/FLightText';

function Landing() {
  return (
    <>
      <div className='landing'>
        <video className='landing-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className='landing-container'>
          <h1 className='animated-text'>Welcome to <span className='name'>Xplore</span> <i className='fas fa-plane'></i></h1>
          <div className='animated-text'>Explore the local areas</div>
        </div>
      </div>
      <Carousel />
      <Dest />
      <FlightText/>
    </>
  );
}

export default Landing;
