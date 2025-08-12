import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Iconempty from '../../Svg/Iconempty';
import IconFlash from '../../Svg/IconFlash';

const GameStatistics = () => {
  // Set the initial active box state (default is the first box: 'Today')
  const [activeBox, setActiveBox] = useState('Today');

  const handleClick = (boxName) => {
    setActiveBox(boxName); // Set the clicked box as active
  };
  return (
    <>
      <div className="">
        {/* Header Section */}
        <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-2 bg-white text-black shadow-sm">
          <Link to="/account" className="text-3xl md:text-2xl text-black">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
            </svg>
          </Link>
          <div className="flex-1 text-center text-lg font-bahnschrif py-3 pr-3">
            Game Statistics
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-1 ">
        {/* Box Container */}
        <div className="flex text-sm gap-1 py-4">
          {['Today', 'Yesterday', 'This week', 'This month'].map(
            (box, index) => (
              <div
                key={index}
                onClick={() => handleClick(box)}
                className={`cursor-pointer py-1 shadow-sm px-4 rounded-full text-center 
            ${
              activeBox === box
                ? 'bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white font-semibold '
                : 'bg-white text-gray-600 hover:bg-gray-300 transition duration-300'
            }`}
              >
                {box}
              </div>
            )
          )}
        </div>
      </div>
      <div className="px-3">
        <div className="gamestats-container-banner flex flex-col items-center p-4 py-8 bg-white shadow-sm rounded-lg">
          <h1 className="text-2xl font-bold text-[#feaa57]">₹0.00</h1>
          <span className="text-md text-gray-600 mt-2">Total bet</span>
        </div>
      </div>
      <div className=" h-24 w-80">
  
      </div>
    </>
  );
};

export default GameStatistics;
