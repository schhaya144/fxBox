import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Navbar = ({ heading, linkPath, className }) => {
  return (
    <div
      className={`sticky top-0 left-0 right-0 z-20 pt-2 pb-2 flex items-center justify-between w-full px-4 mb-0 bg-primary ${className}`}
    >
      {/* Left Side - Back Link Icon */}
      {heading !== "Home" && (
        <Link to={linkPath}>
          <div className="flex text-white">
            <IoChevronBackOutline className="mt-[2px] w-5 h-5" />
            <span className="mt-1 text-xs">Back</span>
          </div>
        </Link>
      )}

      {/* Centered Heading */}
      <div className="flex justify-center flex-grow mr-9">
        <div
          className={`text-[16px]  font-bahnschrift text-white ${className}`}
        >
          {heading}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
