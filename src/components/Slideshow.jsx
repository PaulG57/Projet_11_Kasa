import { useState } from "react";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && <img src={leftArrow} alt="Précédent" className="arrow left" onClick={prevSlide} />}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
      {images.length > 1 && <img src={rightArrow} alt="Suivant" className="arrow right" onClick={nextSlide} />}
      {images.length > 1 && <p className="counter">{currentIndex + 1}/{images.length}</p>}
    </div>
  );
}

export default Slideshow;
