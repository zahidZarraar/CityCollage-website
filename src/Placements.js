import React from 'react';
import Slider from 'react-slick';
import { placementImages } from './Images';

var settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  autoplay:true,
  arrows:false,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
  }}
]};
   

const Placements = () => {
  return (
    <div className='p-10 py-16 bg-[#0b5223] text-white flex  flex-col space-y-4'>
        <h2 className='font-bold text-center text-[1.3rem]
         md:text-[1.7rem] border-b-[0.1px] py-4 md:border-0 '>Our Placement Partners</h2>
        <Slider
        className='container mx-auto pt-10 px-0 md:px-20 flex w-6/6 space-x-4'
        {...settings}
        dotsClass="slick-dots custom-indicator"
      >
        {placementImages.map(logo=>(
          <div className='px-4'>
            <img className='h-[36px]  md:w-6/6 md:h-[50px]' src={logo} alt='logo' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Placements