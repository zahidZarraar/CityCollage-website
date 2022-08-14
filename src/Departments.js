import React from "react";
import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CalculateIcon from '@mui/icons-material/Calculate';


const Departments = () => {
  return (
    <div className="container flex mx-auto flex-col p-10">
      {/* Headline */}
      <div
        className="flex w-[75px] pb-3 space-x-3 border-b-2 
         border-green-700"
      >
        <h4
          className="text-[1.7em] 
            md:text-[2rem]"
        >
          Departments
        </h4>
    </div>
    {/* Departments Container */}
    <div className="grid gap-[0.7rem] p-7 py-10
    grid-cols-[repeat(2,1fr)] max-w-full md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] 
    border-y-[0.50px] border-gray-200">
    {/* Department Flex boxes */}
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <ScienceIcon className=" !text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
        
            <h4 className="font-semibold text-[#363636]">Chemistry</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <PrecisionManufacturingIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Mechanical</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <EngineeringIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Civil</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <ComputerIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Computer </h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <ElectricalServicesIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Electrical</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <CalculateIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Mathematics</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <DesignServicesIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">Architecture</h4>
        </div>
        <div className="flex max-w-[73px] flex-col space-y-2 items-center p-4">
            <ArchitectureIcon className="!text-[40px] text-[#15803d] md:!text-[50px] lg:!text-[60px]" />
            <h4 className="font-semibold text-[#363636]">CAD</h4>
        </div>
    </div>

    </div>
  );
};

export default Departments;
