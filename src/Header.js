import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import Typewriter from "typewriter-effect";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  let [status, setStatus] = useState(false);
  const navigate = useNavigate();

  //! Menu Class
  let MenuClass = "absolute z-50 top-[97%] shadow-lg left-0 right-6 drop-shadow-md flex flex-col space-x-4 self-end sm:w-auto mt-10 font-bold py-6 space-y-5 rounded-sm bg-white justify-center md:hidden";

  return (
    <div
      className="relative z-1000 container 
    mx-auto p-4 flex flex-row justify-between md:flex-col"
    >
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <img
          src="/Images/navbar_logo.png"
          className="h-12 md:h-16"
          alt="logo"
        />
        {/* Right Corner Navbar */}
        <div className="hidden md:flex">
          <div
            className="flex text-sm flex-col max-w-sm
          text-right space-y-1 "
          >
            <h3 className="max-w-sm">Near Doddakallasandra Metro Station</h3>
            <h3 className="max-w-wd">Bangalore, Karnataka-560062.</h3>
          </div>
          <a
            href="https://goo.gl/maps/ME9MWcymSopemE598"
            alt="location"
            className="cursor-pointer"
          >
            <LocationOnIcon style={{ fontSize: "3rem", color: "green" }} />
          </a>
        </div>
      </div>
      {/* Links */}
      <div
        className="space-x-0 pt-7 px-8 pb-3 hidden space-y-6
       text-[1.1rem]  font-semibold
       md:space-x-5 md:text-[1rem] lg:text-[1.2rem] md:space-y-0 md:flex"
      >
        <Link to={() => navigate("/")}>
          <HomeIcon style={{fontSize:'1.6rem'}} />
        </Link>
        <NavLink to='/about' className="">
          About Us
        </NavLink>
        <Link to={() => navigate("/")} className="">
          Programs
        </Link>
        <Link to={() => navigate("/")} className="">
          Admissions
        </Link>
        <Link to={() => navigate("/")} className="">
          Placements
        </Link>
        <Link to={() => navigate("/")} className="">
          Facilities
        </Link>
        <Link to={() => navigate("/")} className="">
          Campus Life
        </Link>
        <div className="flex-1 text-green-900 font-bold">
          <Typewriter
            options={{
              strings: ["Innovation", "Design", "Creation"],
              autoStart: true,
              delay: 240,
              pauseFor: 1200,
              loop: true,
            }}
          />
        </div>
      </div>

      {/* Humburger Icon */}
      <div className="block my-auto  md:hidden">
        {status ? (
          <CloseIcon
            onClick={() => setStatus(!status)}
            id="closeIcon"
            style={{ fontSize: "2.1rem", cursor: "pointer" }}
          />
        ) : (
          <MenuIcon
            onClick={() => setStatus(!status)}
            style={{ fontSize: "2.1rem", cursor: "pointer" }}
          />
        )}
      </div>

      {/* Mobile Menu List */}
      <div className={status ? MenuClass : "hidden card"} id="navlinks">
        <Link to={() => navigate("/")} className="mx-4">
          <HomeIcon style={{fontSize:'1.6rem'}} />
        </Link>
        <Link to={() => navigate("/sfsf")} className="">
          About Us
        </Link>
        <Link to={() => navigate("/")} className="">
          Programs
        </Link>
        <Link to={() => navigate("/")} className="">
          Admissions
        </Link>
        <Link to={() => navigate("/")} className="">
          Placements
        </Link>
        <Link to={() => navigate("/")} className="">
          Facilities
        </Link>
        <Link to={() => navigate("/")} className="">
          Campus Life
        </Link>
        <div className="flex-1 text-green-900 bg-gray-400
        rounded-lg font-bold">
          <Typewriter
            options={{
              strings: ["Innovation", "Design", "Creation"],
              autoStart: true,
              delay: 240,
              pauseFor: 1200,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
