import React from 'react';
import buttonarrow from '../../assets/right-arrowBW.png';
import buttonarrowb from '../../assets/right-arrowB.png';
import RightTriangleIcon from '../../Svg/RightTriangleIcon';
import aboutbg from '../../assets/aboutBg.png';
import { Link } from 'react-router-dom';
import RechargeHistoryIcon from '../../Svg/RechargeHistoryIcon';
import PrivacyIcon from "../Tapbar/svg's/PrivacyIcon";

const Aboutus = () => {
  return (
    <div className="relative w-full h-full pb-96">
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-gamenav-gradient z-10">
        <Link to="/home" className="pb-1 text-white cursor-pointer ps-3">
          <img src={buttonarrow} className="w-[22px] h-[24px]" alt="" />
        </Link>
        <div className="text-white font-normal text-[18.7px] py-3 font-bahnschrift">
          About us
        </div>
        <div className="w-10"></div>
        {/* Placeholder for spacing on the right */}
      </div>
      <div className="mt-1 font-custom">
        <img src={aboutbg} className="w-full mt-12" alt="" />

        <Link
          to={'/confidencial-agreement'}
          className="flex justify-between items-center font-medium border-b-2 bg-white py-6 px-2"
        >
          <div className="flex">
            <PrivacyIcon size={28} className="text-red-500" />
            <div className="text-base ms-1">Confidentiality Agreement</div>
          </div>
          <div>
            <img
              src={buttonarrowb}
              className="w-[22px] h-[22px] opacity-70"
              alt=""
            />
          </div>
        </Link>
        <Link
          to={'/DisclosureAgreementAbout'}
          className="flex justify-between items-center text-base border-b-2 bg-white py-6 px-2"
        >
          <div className="flex">
            <RechargeHistoryIcon className="w-7 me-1" />
            <div className="">Risk Disclosure Agreement</div>
          </div>
          <div>
            <img
              src={buttonarrowb}
              className="w-[22px] h-[22px] opacity-70"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
