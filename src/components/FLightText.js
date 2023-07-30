import React from 'react';
import '../styles/FlightText.css';
import photo from '../assets/aeroplane.png';
//import { Line } from 'three.js';
import { Link } from 'react-router-dom';

const FlightText = () => {
  return (
    <>
    <div className="about-me-container">
      <div className="photo-container">
        <img src={photo} className="my-photo" />
      </div>
      <div className="text-container">
        <h1 className="title">Best flight rates</h1>
        <p className="description">
        Our vision at Xplore is to revolutionize the way people experience and interact with the world 
        through travel. We envision a future where every traveler can embark on a transformative journey 
        that leaves a positive impact on both the places they visit and the people they meet. Through 
        our innovative technology and commitment to responsible tourism, we aim to connect global 
        travelers to local communities, preserving and celebrating the richness of cultural heritage 
        and natural wonders.
        </p>
        <div className='button_warpper'>
        <Link to='/flights'>
          <button className='btn'>Book flights</button>
        </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default FlightText;
