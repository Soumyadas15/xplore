import React from 'react';
import { productData } from './Data';
import '../styles/PlaceDetails.css'

const PlaceDetails = ({ id }) => {
  const place = productData.find((place) => place.id === id);

  if (!place) {
    return <div>Place not found.</div>;
  }

  const { name, price, description, imageurl } = place;

  return (
    <div className='detailsContainer'>
      <h1 className='detailsTitle'>{name}</h1>
      <div className='detailsImageContainer'>
        <img className="detailsImage"src={imageurl} alt="Cover" />
      </div>
      <div className="detailsImage">{price}</div>
      <div className="detailsImage">{description}</div>
    </div>
  );
};

export default PlaceDetails;
