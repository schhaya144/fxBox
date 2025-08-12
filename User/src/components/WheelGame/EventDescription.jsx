import React from 'react';
import NavPramotion from '../pramotion/NavPramotion';
import EventDescriptionArrowIcon from '../../Svg/EventDescriptionArrowIcon';
const EventDescription = () => {
  return (
    <div>
      <NavPramotion
        heading="Event Description"
        linkPath="/WheelGame"
        className="text-[18px] font-medium"
      />
      <div className="py-[15.6px] px-[10.4px]">
        <div className="flex items-center justify-center flex-col bg-white">
          <div className="flex items-center justify-start w-full bg-wheel-events py-[8.3px] px-[10.4px] bg-wheel-events-d">
            <div>
              <EventDescriptionArrowIcon />
            </div>
            <div className="text-[16.6px] text-white ps-3 font-[600]">
              Activity time
            </div>
          </div>
          <div className="p-[10.4px] text-[12px] flex justify-start w-full">
            Form now on
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-white mb-4 mt-2">
          <div className="flex items-center justify-start w-full bg-wheel-events py-[8.3px] px-[10.4px] bg-wheel-events-d">
            <div>
              <EventDescriptionArrowIcon />
            </div>
            <div className="text-[16.6px] text-white ps-3 font-[600]">
              Validity period
            </div>
          </div>
          <div className="p-[10.4px] text-[12px] flex justify-start w-full">
            Official website notification shall prevail
          </div>
        </div>

        <div className="my-[20px] p-[14.55px] text-[#fb5b5b] text-[13.52px] bg-white font-inter">
          Members whose single deposit amount or accumulated deposit amount
          reaches the set amount can participate in the lottery.。
        </div>

        <div className="flex items-center justify-center flex-col bg-white">
          <div className="flex items-center justify-start w-full bg-wheel-events py-[8.31px] px-[10.40px] bg-wheel-events-d">
            <div>
              <EventDescriptionArrowIcon />
            </div>
            <div className="text-[16.6px] text-white ps-3 font-[600]">
              Conditions of participation
            </div>
          </div>
          <div className=" text-[12px] flex flex-col justify-start w-full text-gray-500">
            <p className="p-[10.4px] leading-4">
              Members who meet the requirements of
              <span className="text-[#fb5b5b] px-1">
                Vip1、Vip2、Vip3、Vip4、Vip5、Vip6、Vip7、Vip8、Vip9、Vip10
              </span>
              can participate in the bigwheel event. Need to bind a bank card.
              Hundreds of millions of cash and many other prizes are up for
              grabs. Get ready for endless surprises and grand prizes every day!
            </p>
            <p className="p-[10.4px] text-gray-500 leading-4">
              With hundreds of millions in cash and many other prizes up for
              grabs, get ready for endless surprises and big prizes every day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
