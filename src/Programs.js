import React from "react";

const Programs = () => {
  return (
    <div className="flex justify-center w-full ">
      {/* main */}
      <div
        className="container flex flex-col
        px-4 py-10  "
      >
        {/* Headline */}
        <div
          className="flex w-[115px] pb-3 space-x-3 border-b-2 
         border-green-700"
        >
          <h4
            className="text-[1.7em] 
            md:text-[2rem]"
          >
            Programs
          </h4>
          <h3
            className="text-[1.7em] flex 
            md:text-[2em] text-green-800"
          >
            Offered
          </h3>
        </div>
        <div className="border-y-[0.50px] border-gray-200">
          <div
            className="flex flex-col space-x-0
            justify-between px-4 py-16 
            space-y-6 md:flex-row md:space-y-0
             md:space-x-5"
          >
            {/* UG */}
            <div
              className="bg-[#2f303a] text-[#c9ccca] flex
                space-y-6 px-5 rounded-lg
                shadow-lg shadow-[#969696]
                items-center flex-col py-6 w-full md:w-3/6"
            >
              <h3
                className="text-[17px] w-full
                     rounded-lg text-center bg-[#15803d]
                      text-white md:text-[22px]"
              >
                Under Graduate (B.E)
              </h3>
              <div className="flex text-[0.8em] py-5 space-x-4">
                <div className="flex flex-col space-y-5 ">
                  <p>Computer Science & Eng.</p>
                  <p>Information Science & Eng.</p>
                  <p>Artificial Intelligence & Machine learning</p>
                </div>
                <div className="flex text-[0.9em] flex-col space-y-5 ">
                  <p className="break-word">Electronics & Communication Eng.</p>
                  <p>Mechanical Eng.</p>
                  <p>Civil Eng.</p>
                </div>
              </div>
            </div>
            {/* PG */}
            <div
              className="bg-[#2f303a] w-full text-[#c9ccca] flex
                space-y-6 px-5 rounded-lg 
                shadow-lg shadow-[#969696]
                items-center flex-col py-6 md:w-2/6"
            >
              <h3
                className="text-[17px] w-full
                     rounded-lg text-center bg-[#15803d]
                      text-white md:text-[22px]"
              >
                Post Graduate (M.Tech)
              </h3>
              <div className="text-center">
                <p>Computer Science & Engineering</p>
              </div>
            </div>
            {/* Research */}
            <div
              className="bg-[#2f303a] w-full text-[#c9ccca] flex
                space-y-6 px-5 rounded-lg 
                shadow-lg shadow-[#969696]
                items-center flex-col py-6 md:w-2/6"
            >
              <h3
                className="text-[17px] w-full
                     rounded-lg text-center bg-[#15803d]
                      text-white md:text-[22px]"
              >
                Research Programs
              </h3>
              <div className="flex flex-col space-y-2">
                <p>Ph.D. in Computer Science & Eng.</p>
                <p>Ph.D. in Mechanical Eng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
