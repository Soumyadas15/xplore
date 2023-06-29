import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css/effect-fade';
import { useEffect, useRef } from "react";


import image1 from '../slider/image1.jpg';
import image2 from '../slider/image2.jpg';
import image3 from '../slider/image3.jpg';
import image4 from '../slider/image4.webp';
import image5 from '../slider/image5.webp';

import '../styles/Carousel.css'
import SwiperCore, {
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import { Zoom } from "swiper";
import { transform } from "framer-motion";

const images = [image1, image2, image3, image4, image5];

SwiperCore.use([EffectCoverflow, EffectFade, Pagination, Navigation, Autoplay]);

export default function Carousel() {

  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="title_">
          <span>Gallery</span>
        </div>
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor
        speed={1100}
        autoplay = {{delay: 1000, disableOnInteraction: false}}
        centeredSlides
        slidesPerView={3}
        loop
        coverflowEffect={{
          rotate: 4,
          stretch: 0,
          depth: 100,
          modifier: 4.5,
          slideShadows: true,
        }}
        fadeEffect={{
          crossFade: true,
          duration: 1000, // Increase the duration for a longer fade effect
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image4} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slider1"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
