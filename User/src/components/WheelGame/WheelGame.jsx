import React, { useState } from 'react';
import NavPramotion from '../pramotion/NavPramotion';
import Wheelbgtop from '../../assets/wheelTopbg.png';
import MainWheel from '../../assets/WheelGameWheel.png';
import { Link } from 'react-router-dom';
import ActivityIcon from '../../Svg/ActivityIcon';
import ActivityIntroIcon from '../../Svg/IconActivityIntro';
import ActivityDetailIcon from '../../Svg/ActivityDetailsIcon';
import ActivityRuleIcon from '../../Svg/ActivityRuleIcon';
import IconHistoryHead from '../../Svg/IconHistoryHead';
import IconRefresh from '../../Svg/IconRefresh';

const WheelGame = () => {
  const [select, setSelect] = useState('Spintime'); // Set default selection to 'Today'

  const handleSelect = (option) => {
    setSelect(option);
  };

  const renderContent = () => {
    switch (select) {
      case 'Spintime':
        return (
          <div className="flex justify-center items-center p-4">
            Showing content for Today
          </div>
        );
      case 'Rewardtype':
        return (
          <div className="flex justify-center items-center p-4">
            Showing content for Yesterday
          </div>
        );
      case 'prize':
        return (
          <div className="flex justify-center items-center p-4">
            Showing content for This Month
          </div>
        );
      default:
        return <p>Select a date to view content.</p>;
    }
  };
  return (
    <div>
      <NavPramotion
        heading="Wheel Spin"
        linkPath="/home"
        className="text-[18px]"
      />
      <div className="w-full bg-cover object-fill">
        <img src={Wheelbgtop} />
      </div>
      <div className="p-[12.48px]">
        <div className="w-full flex flex-col justify-center items-center p-3 pb-5 bg-white rounded-lg">
          <div className="flex justify-between items-center rounded-xl  bg-[#f7f8ff] w-full mt-10 px-[7.10px] py-[7.4px]">
            <div className="text-[14.5px] font-inter  font-[400]">
              Total Recharge
            </div>
            <div className="flex justify-between items-center bg-gamenav-gradient px-[9.3px] py-[5px] rounded-full w-[110px] font-[700]">
              <p className="font-inter text-white text-[12.47px]">₹0.00</p>
              <div>
                <IconRefresh
                  className="w-3 h-2"
                  fillColor="text-white"
                  backgroundColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center rounded-xl bg-[#f7f8ff] w-full px-[7.10px] py-[10.4px]">
            <div className="text-[14.5px] font-inter font-[400]">
              Number of spins
            </div>
            <div>
              <p className="flex font-inter font-[700] text-[15.6px] text-gray-500">
                <span className="text-red-500 font-inter font-[700] text-[15.6px]">
                  0
                </span>
                /0
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-2">
          <div>
            <img src={MainWheel} className=" object-fill bg-cover" />
          </div>
          <div className="flex justify-around  items-center p-2 mt-3 w-full">
            <Link
              to="/EventDescription"
              className="flex justify-center items-center flex-col"
            >
              <div>
                <ActivityIntroIcon className="w-14 text-red-500" />
              </div>
              <p className="font-inter text-gray-600 text-[12.4px]">
                Event Description
              </p>
            </Link>
            <Link
              to="/EventDetails"
              className="flex justify-center items-center flex-col"
            >
              <div>
                <ActivityDetailIcon
                  className="w-14 text-red-500"
                  stroke="text-red-400"
                />
              </div>
              <p className="font-inter text-gray-600 text-[12.4px]">
                Event Details
              </p>
            </Link>
            <Link
              to="/AcitivityRules"
              className="flex justify-center items-center flex-col"
            >
              <div>
                <ActivityRuleIcon className="w-14 text-red-500" />
              </div>
              <p className="font-inter text-gray-600 text-[12.4px]">
                Acitivity Rules
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="font-inter text-[16.6px] font-[700] flex items-center justify-start pb-2">
            <IconHistoryHead />
            <span className="ms-1">History</span>
          </div>

          <div className="flex justify-center items-center w-full bg-red-500 rounded-t-lg">
            <div
              onClick={() => handleSelect('Spintime')}
              className={`p-3 text-center w-full text-[14.5px] font-medium text-white`}
            >
              Spin time
            </div>
            <div
              onClick={() => handleSelect('Rewardtype')}
              className={`p-3 text-center w-full text-[14.5px] font-medium  text-white`}
            >
              Reward type
            </div>
            <div
              onClick={() => handleSelect('prize')}
              className={`p-3 text-center text-white w-full text-[14.5px] font-medium `}
            >
              prize
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelGame;
