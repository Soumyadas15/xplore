import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Explore from '../pages/Explore';

import image1 from '../slider/image1.jpg';
import Place from "../components/Places";
import { productData, responsive } from "../components/Data";

import '../styles/Slider2.css'
// import '../styles/Slide.css'

function Slider2() {
  const product = productData.map((item) => (
    <Place
      title={item.name}
      price={item.price}
      description={item.description}
      coverPhoto={item.imageurl}
    />
  ));
  return (
    <>
    <div className='container3'>
    <div className='title_wrapper'>
      <h1>Popular destinations</h1>
    </div>
    <div>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
    </div>
    </div>
    </>
  )
}

export default Slider2