import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Center the slides
    centerPadding: '0', // Remove padding for center mode
  };

  return (
    <div style={{ width:"auto" }}>
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src="./images/home_1.png" alt="Image 1" />
          <div className="overlay-text">Text for Image 1</div>
        </div>
        <div className="slider-item">
          <img src="./images/regin.png" alt="Image 2" />
          <div className="overlay-text">Text for Image 2</div>
        </div>
        <div className="slider-item">
          <img src="./images/danf.png" alt="Image 3" />
          <div className="overlay-text">Text for Image 3</div>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default ImageSlider;
