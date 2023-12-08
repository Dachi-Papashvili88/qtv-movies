import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatic slide change every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);

    // Clear the interval when the component is unmounted or when the currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Wrapper>
      <div className="image-slider">
        <div>
          <div onClick={goToPrevious} className="left-arrow">
            ❰
          </div>
          <div onClick={goToNext} className="right-arrow">
            ❱
          </div>
        </div>
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="dots-container">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageSlider;

const Wrapper = styled.section`
  .image-slider {
    position: relative;
    height: 100%;
  }

  .slide {
    width: 100%;
    height: 70vh;
    border-radius: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .right-arrow,
  .left-arrow {
    background: none;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 45px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
  }

  .right-arrow {
    right: 32px;
  }

  .left-arrow {
    left: 32px;
  }

  .dots-container {
    display: flex;
    justify-content: center;
  }

  .dot {
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
  }

  .dot.active {
    color: #ff6347; /* Change the color of the active dot */
  }
`;
