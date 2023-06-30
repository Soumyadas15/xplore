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
        <img src={photo} alt="My Photo" className="my-photo" />
      </div>
      <div className="text-container">
        <h1 className="title">Best flight rates</h1>
        <p className="description">
          Hi, I'm John Doe. I'm a passionate software engineer with expertise in web development. I love building
          interactive and user-friendly websites that provide great user experiences. I have experience working with
          various front-end frameworks and technologies, including React.js, HTML, CSS, and JavaScript. I am constantly
          learning and exploring new technologies to improve my skills and stay up-to-date with the latest industry
          trends. When I'm not coding, you can find me hiking, playing video games, or experimenting with new recipes in
          the kitchen.
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
