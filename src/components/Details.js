import React from 'react';
import '../styles/FlightText.css';
import photo from '../assets/aeroplane.png';
import { Link } from 'react-router-dom';

const Details = ({ photo, title, price, data }) => {
  return (
    <>
      <div className="about-me-container">
        <div className="photo-container">
          <img src={photo} alt="My Photo" className="my-photo" />
        </div>
        <div className="text-container">
          <h1 className="title">{title}</h1>
          <h1 className="title">{price}</h1>
          <p className="description">
            {data}
          </p>
          <div className='button_wrapper'>
            <Link to='/flights'>
              <button className='btn'>Book flights</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
