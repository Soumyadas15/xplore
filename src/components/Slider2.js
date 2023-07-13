import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Place from '../components/Places';
import { productData1, responsive1 } from '../components/Data1.js';

import '../styles/Slider2.css';
import '../styles/Slide.css';

const Slider2 = () => {
  const product = productData1.map((item) => (
    <Link to={`/places/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
      <Place
        id={item.id}
        title={item.name}
        price={item.price}
        description={item.description}
        coverPhoto={item.imageurl}
      />
    </Link>
  ));

  return (
    <div className="container3">
      <div className="title_wrapper">
        <h1>Top Destinations</h1>
      </div>
      <div>
        <Carousel showDots={true} responsive={responsive1}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider2;
