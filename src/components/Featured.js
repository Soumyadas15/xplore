import { useState } from "react";
import Slideshow from "./Slideshow.js";
import { productData } from "./Data.js";
import "../styles/Featured.css";

const containerStyles = {
  width: "auto",
  height: "auto",
  margin: "0 auto",
};

export default function Featured({ type }) {
  const slides = productData.map((product) => ({
    url: product.imageurl,
    title: product.name,
  }));

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  const handleSlideChange = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <div className="featured">
      <Slideshow slides={slides} onSlideChange={handleSlideChange} />
      <div className="info">
        <h1 className="place">{currentSlide.title}</h1>
        <span className="desc">
          {productData.find((product) => product.name === currentSlide.title)
            .description}
        </span>
      </div>
    </div>
  );
}
