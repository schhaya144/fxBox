import React from 'react';
import { Link } from 'react-router-dom';
import giftimg from '../../assets/account/gift.png';
import GiftHistoryIcon from '../../Svg/GiftHistoryIcon';
import Iconempty from '../../Svg/Iconempty';

const Gift = () => {
  return (
    <>
    <div className="font-roboto">
      {/* Header Section */}
      <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-2 bg-white text-black shadow-md">
        <Link  to="/account" className="text-3xl md:text-2xl text-black">
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
        <div className="flex-1 text-center text-xl font-semibold py-3 pr-3">
          Gift
        </div>
      </div>

      {/* Body Section */}
      <div className="flex flex-col items-center  space-y-4">
        <img src={giftimg} className="w-full h-48" />
      </div>
    
    <div className="p-1 px-3">
    <div className="flex flex-col p-3 text-sm bg-white  ">
        <div className="text-sm text-[#768096] font-applebahnschrift ">Hi</div>
        <div className="text-sm -mt-2 text-[#768096] font-bahnschrift">We have a gift for you</div>
        <h4 className=" text-md text-gray-900 pt-8">
          Please enter the gift code below
        </h4>
        <input
          type="text"
          autoComplete="new-password"
          placeholder="Please enter gift code"
          className="w-3/4 px-4 py-3 my-4 border rounded-full focus:outline-none bg-[#F7F8FF] focus:ring-2 focus:ring-red-400"
        />
        <button className="px-6 py-2 mt-2 text-lg  rounded-full text-white bg-gradient-to-r from-red-500 via-red-400 to-red-300">
          Receive
        </button>
      </div>
    </div>

      {/* History Section */}
      <div className="mt-3 px-3">
        <div className="flex items-center rounded-lg p-2 space-x-2 bg-white">
        <GiftHistoryIcon className="text-red-500 w-6 h-6" /> {/* Adjust color/size */}
          <span className="text-lg ">History</span>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-center items-center text-gray-500">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG path for empty state icon */}
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
            </svg>
            <p className="text-sm">No data</p>
            <Iconempty/>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Gift;
