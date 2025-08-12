import React from "react";
import { FaBars, FaExpandArrowsAlt } from "react-icons/fa";

const Navbar = ({ sidebarToggle }) => {
  return (
   <nav className="bg-black fixed w-[84%] px-4 shadow-lg py-4 h-10 flex justify-between top-0">
     <div className="flex items-center w-full text-xl">
        <FaBars className="text-white cursor-pointer me-4" onClick={sidebarToggle}/>
</div>

      {/* Spacer to push the expand icon to the right */}
      <div className="flex items-center gap-x-5">
       <div className="text-white "><FaExpandArrowsAlt className="w-6 h-6 cursor-pointer"></FaExpandArrowsAlt></div>
      </div>
    </nav>
    
  );
};

export default Navbar;
