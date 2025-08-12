// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import rightImg from '../../../assets/right-arrowBB.png';

const NavActivity = ({ heading, linkPath }) => {
  return (
    <div className="sticky top-0 left-0 right-0 z-20 py-[12px] flex items-center justify-between w-full px-3 mb-0 bg-white">
      {/* Left Side - Back Link Icon */}
      <Link to={linkPath}>
        <div className="flex-none">
          <img src={rightImg} alt="Back" className="w-5 h-5" />
        </div>
      </Link>

      {/* Centered Heading */}
      <div className="flex-grow flex text-center justify-center">
        <div className="text-19px mr-5 text-gray-800 font-sansSerif">{heading}</div>
      </div>
    </div>
  );
};

export default NavActivity;
