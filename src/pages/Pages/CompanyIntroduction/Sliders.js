import React from "react";
// Carousel images
import img7 from "../../../assets/images/small/img-7.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img9 from "../../../assets/images/small/img-9.jpg";


import Slider from 'react-slick';
import './Sliders.css';

const Sliders = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed:3000,
    speed: 3000,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.image} alt="slider" key={index} className="image" />
            <span>{slide.name}</span>
          </div>
        );
      })}
    </Slider>
  );
};

export default Sliders;


