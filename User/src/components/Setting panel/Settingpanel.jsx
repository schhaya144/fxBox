import React from 'react';
import buttonarrow from '../../assets/right-arrowB.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import IconLanguage from '../../Svg/IconLanguage';
import IconNotificationCenter from '../../Svg/IconNotificationCenter';
import Iconserver from '../../Svg/IconServer';
import Iconguide from '../../Svg/GuideIcon';
import IconAbout from '../../Svg/IconAbout';
import IconDownload from '../../Svg/IconDownload';

const Settingpanel = () => {
  return (
    <>
      <div className="flex flex-col mx-4 mt-4 mb-8">
        <Link
          to="/Language"
          className="flex justify-between items-center px-3 py-3 border-b-2  bg-white rounded-md"
        >
          <div className="font-semibold flex items-center">
            <IconLanguage className="w-8" />
            <span className="ms-2">Language</span>
          </div>
          <div>
            <img src={buttonarrow} className="w-[18px] h-[18px]" alt="" />
          </div>
        </Link>

        <Link
          to="/notification"
          className="flex justify-between items-center px-3 py-3  border-b-2 bg-white rounded-md"
        >
          <div className="font-semibold flex items-center">
            <IconNotificationCenter className="w-8 text-red-400" />
            <span className="ms-2"> Notification</span>
          </div>
          <div>
            <img src={buttonarrow} className="w-[18px] h-[18px]" alt="" />
          </div>
        </Link>

        <Link
          to="/customer-service"
          className="flex justify-between items-center px-3 py-3 border-b-2 bg-white rounded-md"
        >
          <div className="font-semibold flex items-center">
            <Iconserver className="w-7 h-8" />
            <span className="ms-2">24/7 Customer service</span>
          </div>
          <div>
            <img src={buttonarrow} className="w-[16px] h-[18px]" alt="" />
          </div>
        </Link>

        <Link
          to="/beginner-guide"
          className="flex justify-between items-center px-3 py-3 border-b-2 bg-white rounded-md"
        >
          <div className="font-semibold flex items-center">
            <Iconguide className="w-10 h-7" />{' '}
            <span className="ms-2">Beginner's Guide</span>
          </div>
          <div>
            <img src={buttonarrow} className="w-[18px] h-[18px]" alt="" />
          </div>
        </Link>

        <Link
          to="/about-us"
          className="flex justify-between items-center px-3 py-3 border-b-2 bg-white rounded-md"
        >
          <div className="font-semibold flex items-center">
            <IconAbout className="w-9 text-red-400" />
            <span className="ms-2"> About us</span>
          </div>
          <div>
            <img src={buttonarrow} className="w-[18px] h-[18px]" alt="" />
          </div>
        </Link>

        <Link className="flex justify-between items-center px-3 py-3 border-b-2 bg-white rounded-md">
          <Link
            to="/download-Daman"
            className="font-semibold flex items-center"
          >
            <IconDownload className="w-9 h-9 text-red-400" />
            <span className="ms-2 text-gray-900">Download APP</span>
          </Link>
          <div>
            <img src={buttonarrow} className="w-[18px] h-[18px]" alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Settingpanel;
