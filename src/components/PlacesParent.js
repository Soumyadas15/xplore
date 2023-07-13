import React from 'react';
import Place from './Places';
import { productData } from './Data';

const PlacesParent = () => {

  return (
    <div>
      {productData.map(place => (
        <Place
          key={place.id}
          id={place.id}
          title={place.name}
          price={place.price}
          description={place.description}
          coverPhoto={place.imageurl}
        />
      ))}
    </div>
  );
};

export default PlacesParent;
