import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    centerPadding: "0", // Remove padding for center mode
  };

  return (
    <div style={{ width: "auto" }}>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <img src="./images/home_1.png" alt="Image 1" />
            <div className="overlay-text">Solar solutions</div>
          </div>
          <div className="slider-item">
            <img src="./images/regin.png" alt="Image 2" />
            <div className="overlay-text">Connecters</div>
          </div>
          <div className="slider-item">
            <img src="./images/home_3_950x450.jpg" alt="Image 3" />
            <div className="overlay-text">Fire solutions</div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
