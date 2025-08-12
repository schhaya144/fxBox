import React from 'react';
import buttonarrow from '../../assets/right-arrowBW.png';
import buttonarrowb from '../../assets/right-arrowB.png';
import { Link } from 'react-router-dom';
import Coustomerbg from '../../assets/customerBg.png';
import Livechat from '../../assets/CStype3-7588d980.png';
import homeicon from '../../assets/homeicon.png';
import { IoLogoWhatsapp } from "react-icons/io";

const CoustomerService = () => {
  return (
    <div className="relative w-full h-full bg-primary pb-96">
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-primary z-10">
        <Link to="/home" className="pb-1 text-white cursor-pointer ps-3">
          <img
            src={buttonarrow}
            className="w-[22px] h-[24px] object-fill"
            alt="Back"
          />
        </Link>
        <div className="py-3 text-xl font-normal text-white">
          Customer Service
        </div>
        <div className="me-4">
          <img
            src={homeicon}
            className="w-[22px] h-[26px] object-fill"
            alt="Home"
          />
        </div>
        {/* Placeholder for spacing on the right */}
      </div>

      <div className="mt-1">
        <img src={Coustomerbg} className="w-full mt-12" alt="Customer Background" />
        
        {/* WhatsApp Chat Integration */}
        <a href="https://wa.me/9926070744?text=Hello,%20I%20need%20help!" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-between px-2 py-4 mx-4 mt-4 font-medium bg-fxbt-gradient text-white rounded-md">
            <div className="flex items-center justify-center ms-1">
              <IoLogoWhatsapp className='w-5 h-5'/>
              <div className="text-sm font-normal text-justify ms-3">
                Live Chat
              </div>
            </div>
            <div>
              <img
                src={buttonarrowb}
                className="w-[20px] h-[20px] opacity-55 me-2"
                alt="Arrow"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CoustomerService;
