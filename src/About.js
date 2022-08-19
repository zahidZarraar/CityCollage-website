import React from "react";

const About = () => {
  return (
    <div id='about' className="container flex mx-auto flex-col p-10">
      {/* Headline */}
      <div
        className="flex w-[75px] pb-3 space-x-3 border-b-2 
         border-green-700"
      >
        <h4
          className="text-[1.7em] 
            md:text-[2rem]"
        >
          About
        </h4>
        <h3
          className="text-[1.7em] 
            md:text-[2em] text-green-800"
        >
          CEC
        </h3>
      </div>

      {/* About Paragraph */}

      <div
        className="container 
      py-14 flex flex-col space-y-3 border-y-[0.50px] border-gray-200"
      >
        <p
          className="leading-30 text-darkGrayishBlue 
        text-[1em] md:text-[1em]"
        >
          City Engineering college is an institution located in central
          bangalore that provides vivid courses of engineering for graduation as
          well as post graduation. The college is affiliated to Visvesvaraya
          technological Institute (VTU), Karnataka and has crossed 19 years of
          establishment.
        </p>
        <p
          className="leading-30 text-darkGrayishBlue 
        text-[1em] md:text-[1em]"
        >
          The admission process being online necessitates a requirement of
          fulfilling the eligibility criteria of VTU which includes merit based
          as well as entrance exam. It provides special reservation for SC and
          ST categories of all India and other backward classes for Karnataka.
          From the time of its establishment the college has catered to the
          needs of Indian as well as International students providing
          satisfactory facilities to both.
        </p>
        <p
          className="leading-30 text-darkGrayishBlue 
        text-[1em] md:text-[1em]"
        >
          It trains students for employment opportunities and thus the average
          percentage of the students being placed is increasing year after year.
          The placement cell organizes campus placement programmes through which
          students get placed in top-notch companies like IBM, Infosys, Wipro,
          HP etc. with a package of average salary ranging from 2-6 lac per
          annum.
        </p>
      </div>
    </div>
  );
};

export default About;
