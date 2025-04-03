import React from "react";
import Marquee from "react-fast-marquee";
import { NeImages } from "./Images";

const Newsandevents = () => {
  return (
    <div
      id="newsandevents"
      className=" bg-NE p-10 py-14 bg-cover
     bg-no-repeat w-full h-[350px] md:h-[500px] lg:h[600px] "
    >
      <h2
        className="text-white text-center
        text-[1.7rem] md:text-[2rem] font-semibold "
      >
        News and Events
      </h2>
      {/* Slider */}
      <div className="flex mt-[5%] lg:mt-[3%] items-center w-full m-auto ">
        <Marquee speed={50} pauseOnHover gradient={false}>
          {/* <div className='flex items-center h-[200px] justify-evenly w-full'> */}
          {NeImages.map((logo) => (
            <div className="px-4">
              <img
                className="rounded w-[210px] md:w-[320px]"
                height="100%"
                src={logo}
                alt="logo"
              />
            </div>
          ))}
          {/* </div> */}
        </Marquee>
      </div>
    </div>
  );
};

export default Newsandevents;
