import { useEffect, useState } from "react";
import LeftIcon from "../UI-Elements/icons/LeftIcon";
import RightIcon from "../UI-Elements/icons/RightIcon";
import "./carousel.css";
function Carousel({ images }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlideIndex + 1 <= images.length) {
        rightSlide();
      } else {
        leftSlide();
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlideIndex]);

  const leftSlide = () => {
    if (currentSlideIndex <= 0) {
      setCurrentSlideIndex(images.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const rightSlide = () => {
    if (currentSlideIndex + 1 >= images.length) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  return (
    <div className="carousel">
      <div
        className="carousel-item"
        style={{
          backgroundImage: `url("${images[currentSlideIndex]}")`,
        }}
        alt="sliderImage"
      >
        <div className="carousel-controlls">
          <div className="left-control" onClick={leftSlide}>
            <LeftIcon />
          </div>
          <div className="right-control" onClick={rightSlide}>
            <RightIcon />
          </div>
        </div>

        <div className="slider-counter-container">
          {" "}
          {currentSlideIndex + 1 + " / " + images.length}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
