import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SliderImages } from "./Images";
        // speed={1000}
        // autoplay
        // autoplaySpeed={5000}
        // dots
        // initialSlide={2}
        // infinite
const settings = {
  dots: true,
  autoplay:true,
  infinite: true,
  speed: 1000,
  lazyLoad:'progressive',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        speed:1000,
      }
    },
  ]
};

const PrevBtn = (props) => {
  console.log(props);
  const {onClick} = props;
    return(
      <div onClick={onClick} className="absolute z-50 top-1/2 ml-10 hidden md:block cursor-pointer">
        <ArrowBackIosIcon className="text-white"
         style={{fontSize:'2.7rem'}} />
      </div>
    )
}

const NextBtn = (props) => {
  const {onClick} = props;
  return(
    <div onClick={onClick} className="absolute z-50 right-0 top-1/2 mr-10 hidden md:block cursor-pointer">
    <ArrowForwardIosIcon className="text-white"
     style={{fontSize:'2.7rem'}} />
  </div>
  )
}

const Hero = () => {

  return (
    <div className="relative">
      <Slider
        prevArrow={<PrevBtn/>}
        nextArrow={<NextBtn/>}
        {...settings}

        // dotsClass="slick-dots custom-indicator"
      >
        {SliderImages.map((img) => (
          <div className="cursor-pointer w-[100%] h-[370px] md:h-[480px] lg:h-[570px] ">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover md:object-fill "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
