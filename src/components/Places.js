import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Places.css';

const Place = ({ id, title, price, description, coverPhoto }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="cover-photo" src={coverPhoto} alt="Cover" />
      <div className="title" style={{ fontSize: '2.8vh', color: '#303030' }}>{title}</div>
      <div className="price" style={{ fontSize: '2.5vh', fontWeight: 'bold', color: '#303030' }}>{price}</div>
      <div className="description" style={{color: '#303030' }}>{description} </div>
    </div>
  );
};

export default Place;
