import React from 'react';
import '../styles/Landing.css';
import Carousel from '../components/Carousel'
import video from '../assets/background.mp4';
import Dest from './Dest';

function Landing() {
  return (
    <>
      <div className='landing'>
        <video className='landing-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className='landing-container'>
          <h1>Welcome to XPLORE <i className='fas fa-plane'></i></h1>
          <div>Explore the local areas</div>
        </div>
      </div>
      <Carousel/>
      <Dest/>
    </>
  );
}

export default Landing;
