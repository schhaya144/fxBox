import React from 'react';
import CStype3 from '../assets/CStype3-7588d980.png';
import daman_logo from '../assets/daman_logo.png';
import age_limit from '../assets/age-limit5.png';
import CQ9 from '../assets/CQ9.png';
import microgaming from '../assets/microgaming4.webp';
import JDB from '../assets/JDB.png';
import evolution from '../assets/evolution2.png';
import JILI from '../assets/JILI2.png';
import AG from '../assets/AG..webp';

const DamanInfo = () => {
  return (
    <div className="max-w-lg px-3 py-4 mx-3 bg-white rounded-lg shadow-lg ">
      {/* Header Section */}
      <div className="flex items-center mb-5 justify-content-between">
        <div className="flex items-center justify-center">
          <img src={daman_logo} alt="Daman" className="h-11" />
        </div>
        <div className="flex items-center justify-center object-fill rounded-full ms-8">
          <img src={age_limit} alt="age-limit" className="w-16 h-15"/>
        </div>
        <div className="flex items-center justify-center ms-20">
          <img src={CStype3} alt="Customer Service" className="w-11 h-11" />
        </div>
      </div>

      {/* Games Logos */}
      <div className="grid grid-cols-3 gap-4 mb-6 ">
        <div className="flex items-center justify-center rounded  bg-[#f6f6f6] h-12 py-1">
          <img src={CQ9} alt="CQ9" className="w-16" />
        </div>
        <div className="flex items-center justify-center rounded bg-[#f6f6f6] h-12 py-1">
          <img src={microgaming} alt="Microgaming" className="w-24 h-20" />
        </div>
        <div className="flex items-center justify-center rounded bg-[#f6f6f6] h-12 py-1">
          <img src={JDB} alt="JDB" className="w-16" />
        </div>
        <div className="flex items-center justify-center rounded bg-[#f6f6f6] h-12 py-1">
          <img src={evolution} alt="Evolution" className="w-24" />
        </div>
        <div className="flex items-center justify-center rounded bg-[#f6f6f6] h-12 py-1">
          <img src={JILI} alt="Jili" className="w-14" />
        </div>
        <div className="flex items-center justify-center rounded bg-[#f6f6f6] h-12 py-1">
          <img src={AG} alt="AG" className="h-20 w-22 ms-8" />
        </div>
      </div>

      {/* Information Text */}
      <div className="space-y-2 text-12px font-inter text-gray-700">
        <p className="">
          <span className="mr-2 text-red-600">◆</span>
          The platform advocates fairness, justice, and openness. We mainly
          operate fair lottery, blockchain games, live casinos, and slot machine
          games.
        </p>
        <p className="">
          <span className="mr-2 text-red-600">◆</span>
          Welcome to Daman Games works with more than 10,000 online live game
          dealers and slot games, all of which are verified fair games.
        </p>
        <p className="">
          <span className="mr-2 text-red-600">◆</span>
          Welcome to Daman Games supports fast deposit and withdrawal, and looks
          forward to your visit.
        </p>
      
      </div>

      {/* Warning Text */}
      <div className="mt-3 text-12px font-inter text-red-500">
      <p className="">
          Gambling can be addictive, please play rationally.
        </p>
        <p className=" ">
          Welcome to Daman Games only accepts customers above the age of 18.
        </p>
      </div>
    </div>
  );
};

export default DamanInfo;
