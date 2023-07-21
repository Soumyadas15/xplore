import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-cube";
import { useEffect, useRef } from "react";

import Image6 from "../slider/Image6.jpg";
import Image7 from "../slider/Image7.jpg";
import Image8 from "../slider/Image8.jpg";
import Image9 from "../slider/Image9.jpg";
import Image10 from "../slider/Image10.jpg";
import Image11 from "../slider/Image11.jpg";

import "../styles/Carousel.css";
import SwiperCore, {
  Autoplay,
  EffectFlip,
  Pagination,
  Navigation,
} from "swiper/core";

const images = [Image6, Image7, Image8, Image9, Image10, Image11];

SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay]);

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
        effect="flip"
        grabCursor
        speed={5500}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        centeredSlides
        slidesPerView={1}
        loop
        flipEffectEffect={{
          
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image9} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image9} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image10} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt="slider1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
