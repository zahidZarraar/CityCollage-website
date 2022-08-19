import React from "react";

const CampusLife = () => {
  return (
    <div id='campuslife' className="container flex mx-auto flex-col p-10">
      <div className="flex flex-col">
        {/* Headline */}
        <div
          className="flex w-[115px] pb-3 space-x-3 border-b-2 
            border-green-700"
        >
          <h4
            className="text-[1.7em] 
                md:text-[2rem]"
          >
            Campus
          </h4>
          <h3
            className="text-[1.7em] flex 
                md:text-[2em] text-green-800"
          >
            Life
          </h3>
        </div>
      </div>
      {/* Main */}

      <div className="border-y-[0.50px] py-10 border-gray-200">
        <div
          className="flex flex-col-reverse 
            p-7 justify-between items-between md:flex-row"
        >
          <p className="text-gray-700 
           text-[0.9em] lg:text-[1.2em] 
           lg:leading-[30px] leading-[26px] md:pr-10 text-left pt-8 md:pt-0">
            The Collage Campus is a vibrant residential campus that allows students to
            flourish both personally and professionally. Campus life at City
            Engineering Collage is not just about classrooms, libraries and labs. There are
            several opportunities for students to pursue their favorite
            activities, refine their skills and discover new talents and
            interests. The campus is a constant buzz of varied activities and
            events - academic, co-curricular and extracurricular.
          </p>
          <img
            src="/Images/Cl-home.jpg"
            className=" flex-1 lg:h-[350px] md:h-[250px]"
            alt='collageImage'
          />
        </div>
        {/* More Images */}
        <div className="flex flex-col items-center md:flex-row space-x-1 
        space-y-2 md:space-y-0">
            <img src='Images/CL-L.jpg' alt='' className="h-[150px]  lg:h-[150px] rounded w-full" />
            <img src='Images/CL-R.jpg' alt='' className="h-[150px]  lg:h-[150px] rounded w-full" />
            <img src='Images/CL-M.jpg' alt='' className="h-[150px] lg:h-[150px] rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
