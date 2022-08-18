import React from "react";

const Admissions = () => {
  return (
    <div className="flex flex-col space-y-11 py-12">
      {/* Criteria */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-center 
         bg-[#292828] text-white text-[1.1em] font-bold md:text-[1.4rem]">Admission Criteria</h2>
        <p className="px-4 text-gray-900 font-semibold text-center mdmd:text-[1.1rem]">
          Students’ should match eligibility criteria as per Visvesvaraya
          Technological University (VTU)
        </p>
      </div>
      {/* Regulations */}
      <div className="flex flex-col space-y-8">
      <h2 className=" 
        text-[1em] font-bold md:text-[1.1rem] ml-3
        text-black ">Rules and Regulations :- </h2>
        <div className="flex flex-col space-y-3">
          <h4 className="text-gray-900 text-center font-bold border-y-[1px]">B.E/B.Tech Courses : </h4>
          <p className="px-2 text-gray-600 md:text-[1.1rem]">
            The student should have passed 2nd PUC / 12th standard or equivalent
            examination with English as one of the languages and obtained 45% of
            marks in aggregate in Physics and Mathematics as compulsory subjects
            along with one of the Chemistry / Bio-Technology/ Computer Science
            /Electronics /Biology. In case of candidates belonging to Karnataka
            Scheduled Caste, Scheduled Tribe and other Backward Classes
            (Category 1, 2A, 2B, 3A and 3B). the minimum marks for the purpose
            of eligibility will be 40% of marks in aggregate in the optional
            subjects in the qualifying examination
          </p>
        </div>
        {/* sdknfklsdnflsdnflsdf */}
        <div className="flex flex-col space-y-3">
        <h4 className="text-gray-900 text-center font-bold border-y-[1px]">M.Tech Courses : </h4>
          <p className="px-2 text-gray-600 md:text-[1.1rem]">
            Admission to M.Tech. course shall be open to candidates who have
            passed prescribed qualifying examination with not less than 50% of
            the marks in aggregate of all the semesters / years of the degree
            examination (cumulative sum of secured marks of all the semesters /
            years divided by the sum of maximum marks) However, in the case of
            candidates from Karnataka belonging to **SC/ST/Cat-I, marks shall
            not be less than 45%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
