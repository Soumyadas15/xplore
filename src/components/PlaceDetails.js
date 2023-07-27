import React from 'react';
import { productData } from './Data';
import '../styles/PlaceDetails.css'

const PlaceDetails = ({ id }) => {
  const place = productData.find((place) => place.id === id);

  if (!place) {
    return <div>Place not found.</div>;
  }

  const { name, price, description, imageurl ,description1,imageurl4,imageurl5,imageurl6,description2,description3} = place;

  return (
    <>
    <div className='detailsContainer'>
      <h1 className='detailsTitle'>{name}</h1>
      <div className='detailsImageContainer'>
        <img className="detailsImage"src={imageurl} alt="Cover" />
      </div>
      <div className="detailsImage">{price}</div>
      <div className="detailsImage">{description}</div>
      <div className="detailsImage1"><h1>Places you can visit</h1></div>
    </div>
    <div className='Nilay'>
      <div className="description1"><img className="jaldapara"src={imageurl4} alt="Cover" /><h3></h3>{description1}</div>
      <div className="description1"><img className="jaldapara"src={imageurl5} alt="Cover" /><h3></h3>{description2}</div>
      <div className="description1"><img className="jaldapara"src={imageurl6} alt="Cover" /><h3></h3>{description3}</div>
      </div>
      
      </>
  );
};

export default PlaceDetails;
