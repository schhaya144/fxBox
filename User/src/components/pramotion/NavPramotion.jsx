// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import rightImg from '../../assets/right-arrowBB.png';
import { IoIosArrowBack } from "react-icons/io";

const NavPramotion = ({ heading, linkPath, className }) => {
  return (
    <div
      className={`sticky top-0 left-0 right-0 z-20 pt-2 pb-2 flex items-center text-white justify-between w-full px-4 mb-0 bg-primary ${className}`}
    >
      {/* Left Side - Back Link Icon */}
      <Link to={linkPath}>
        <div className="flex-none">
          {/* <img src={rightImg} alt="Back" className="w-5 h-5" /> */}
          <IoIosArrowBack />
        </div>
      </Link>

      {/* Centered Heading */}
      <div className="flex-grow flex justify-center">
        <div
          className={` text-[19.72px] font-[400] blinkMacSystemFont appleSystem ${className}`}
        >
          {heading}
        </div>
      </div>
    </div>
  );
};

export default NavPramotion;
