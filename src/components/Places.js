import React from 'react';
import '../styles/Places.css';


import image1 from '../slider/image1.jpg';

const Place = ({ title, price, description, coverPhoto }) => {
  return (
    <div className="card">
      <img className="cover-photo" src={coverPhoto} alt="Cover" />
      <div className="title" style={{'font-size' : '2.8vh'}}>{title}</div>
      <div className="price" style={{'font-size' : '2.5vh', 'font-weight': 'bold', 'color' : '#303030'}}>{price}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Place;
