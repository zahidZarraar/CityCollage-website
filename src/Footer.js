import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import OpenInBrowser from "@mui/icons-material/OpenInBrowser";

const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue p-8">
      {/* flex box */}
      <div
        className="relative container flex flex-col-reverse mx-auto
        py-10 pb-24 px-1 space-y-8 justify-between md:flex-row md:space-y-0"
      >
        <div className="absolute rounded-full bg-darkGrayishBlue bottom-1 left-[0] text-center w-full">
          <h4 className="text-black font-bold text-[0.9rem]
          font-sans ">
            Made with Love by Saad and Team  ❤️
          </h4>
        </div>
        {/* Logo social Links */}
        <div
          className="flex flex-col-reverse items-center justify-between
        space-y-10 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <img src="/Images/navbar_logo.png" className="h-[60px]" alt="logo" />
          {/* social Container */}
          <div className="flex justify-center space-x-4">
            <FacebookIcon style={{ color: "white" }} />
            <YouTubeIcon style={{ color: "white" }} />
            <TwitterIcon style={{ color: "white" }} />
            <PinterestIcon style={{ color: "white" }} />
            <InstagramIcon style={{ color: "white" }} />
          </div>
        </div>
        {/* List Container */}
        <div className="flex flex-col text-darkGrayishBlue space-y-10 pb-10">
        <h2 className="text-white font-semibold text-2xl 
         border-gray-500 ">Quick links</h2>
        <div className="flex justify-around  space-x-32">
          <div className="flex flex-col space-y-5 ">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              About Us
            </a>
            <a href="#" className="hover:text-brightRed">
              Programs
            </a>
            <a href="#" className="hover:text-brightRed">
              Admissions
            </a>
          </div>
          <div className="flex flex-col space-y-5">
            <a href="#" className="hover:text-brightRed">
              Placements
            </a>
            <a href="#" className="hover:text-brightRed">
              Campus Life
            </a>
            <a href="#" className="hover:text-brightRed">
              Departments
            </a>
          </div>
        </div>
        </div>

        {/* Contact Us Conatiner */}

        <div className="flex flex-col justify-between space-y-10">
          <h2 className="text-white font-semibold text-2xl">Contact Us</h2>
          <div className="flex flex-col space-y-5 
          max-w-sm">
            <div className="flex space-x-2">
              <LocationOnIcon className="text-white" />
              <a href="https://goo.gl/maps/ME9MWcymSopemE598" className="leading-5 max-w-sm text-darkGrayishBlue text-[0.9em]">
                VHQ2+M7P, Kanakapura Rd, near METRO Station, Doddakallasandra,
                 Bengaluru, Karnataka 560062
              </a>
            </div>
            <div className="flex space-x-2">
              <PhoneAndroidIcon className="text-white" 
              style={{fontSize:'1.5em'}} />
              <p className="leading-5 max-w-sm text-darkGrayishBlue text-[0.9em]">
              +91 9901799666
              </p>
            </div>
            <div className="flex space-x-2">
              <OpenInBrowser className="text-white" 
              style={{fontSize:'1.5em'}} />
              <a href='http://cityengineeringcollege.ac.in/' className="leading-5 max-w-sm text-darkGrayishBlue text-[0.9em]">
              http://cityengineeringcollege.ac.in/
              </a>
            </div>
          </div>

          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
