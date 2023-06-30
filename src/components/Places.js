import React, { useState } from 'react';
import '../styles/Places.css';
import Details from '../components/Details';

import image1 from '../slider/image1.jpg';

const Place = ({ title, price, description, coverPhoto }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(true);
  };

  return (
    <>
      <div className="card" onClick={handleClick}>
        <img className="cover-photo" src={coverPhoto} alt="Cover" />
        <div className="title" style={{ fontSize: '2.8vh' }}>{title}</div>
        <div className="price" style={{ fontSize: '2.5vh', fontWeight: 'bold', color: '#303030' }}>{price}</div>
        <div className="description">{description}</div>
      </div>
      {showDetails && (
        <div className="details-container">
          <Details
            photo={coverPhoto}
            title={title}
            price={price}
            data={description}
            onClose={() => setShowDetails(false)}
          />
        </div>
      )}
    </>
  );
};

export default Place;
