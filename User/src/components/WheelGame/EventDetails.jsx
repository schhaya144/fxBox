import React from 'react';
import NavPramotion from '../pramotion/NavPramotion';
import RuleHeadIcon from '../../Svg/RuleHeadIcon';
import StyledSquareIcon from '../../Svg/StyledSquareIcon';

const EventDetails = () => {
  const ADdata = [
    { task: '₹1,000,00', NOofSpin: '+1', Stime: '00:00-23:59' },
    { task: '₹5,000,00', NOofSpin: '+2', Stime: '00:00-23:59' },
    { task: '₹10,000,00', NOofSpin: '+3', Stime: '00:00-23:59' },
    { task: '₹50,000,00', NOofSpin: '+4', Stime: '00:00-23:59' },
    { task: '₹100,000,00', NOofSpin: '+5', Stime: '00:00-23:59' },
    { task: '₹200,000,00', NOofSpin: '+6', Stime: '00:00-23:59' },
  ];

  return (
    <div>
      <NavPramotion
        heading="Activity details"
        linkPath="/WheelGame"
        className="text-[18px] font-medium"
      />
      <div className="pt-4 px-3 rounded-t-3xl">
        <div className="w-full rounded-t-lg bg-[#f95959] text-white">
          <div className="flex justify-around items-center p-3">
            <p className="text-[16px] font-semibold ms-7">Task</p>
            <p className="text-[16px] font-semibold ">Number of Spins</p>
            <p className="text-[16px] font-semibold">Spin Time</p>
          </div>
        </div>
        <div className="bg-white">
          {ADdata.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 px-4 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="flex flex-col items-center w-1/3">
                <p className="text-red-500 text-[14px] font-medium">
                  {item.task}
                </p>
                <p className="text-[12px] text-[#768096] text-center">
                  Cumulative deposit balance
                </p>
              </div>
              <div className="w-1/3 text-center text-[14px]">
                {item.NOofSpin}
              </div>
              <div className="w-1/3 text-center text-[14px] text-[#768096]">
                {item.Stime}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center bg-white my-4 p-4 rounded-md shadow-sm">
          <div className="relative w-60 flex justify-center items-center mb-3">
            <RuleHeadIcon className="absolute text" />
            <span className="absolute text-white text-[16.6px] font-bold font-inter">
              Rules
            </span>
          </div>
          <ul className="w-full space-y-3 mt-4">
            <li className="flex items-start">
              <StyledSquareIcon className="mt-2 w-4" />
              <p className="ml-1 text-[14px] leading-5 text-[#768096]">
                Members must reach the single deposit amount and cumulative
                deposit amount to be eligible to participate in the lottery.
              </p>
            </li>
            <li className="flex items-start">
              <StyledSquareIcon className="w-[10px] mt-1" />
              <p className="ml-1 text-[14px] text-[#768096] leading-5">
                Conditions for withdrawal of wheel rewards:
                <span className="text-red-500"> 1 </span> times turnover
                required.
              </p>
            </li>
            <li className="flex items-start">
              <StyledSquareIcon className="w-6 mt-1" />
              <p className="ml-1 text-[14px] text-[#768096] leading-5">
                If you receive monetary rewards, there is no need to apply; the
                system will automatically add them to your member ID. (Please
                contact customer service to receive physical rewards.)
              </p>
            </li>
            <li className="flex items-start">
              <StyledSquareIcon className="w-[18px] mt-1" />
              <p className="ml-1 text-[14px] text-[#768096] leading-5">
                The lottery round starts every morning at
                <span className="text-red-500"> 00:00 </span>. After making your
                deposit, you need to wait 5 minutes before the draw wheel
                starts.
              </p>
            </li>
          </ul>
          <div className="rounded-md bg-[#f7f8ff] p-3 mt-4 text-[#768096] text-[14px] ">
            <p className="text-[#768096] text-[13.5px] blinkMacSystemFont appleSystem leading-5">
              For example:
            </p>
            <p className="leading-4">
              If a member's single deposit exceeds{' '}
              <span className="text-red-500">₹200,000.00</span> on the same day,
              they will receive <span className="text-red-500">6</span> lucky
              draw opportunities. The lottery draws are valid for the same day
              and cannot be accumulated to the next day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
