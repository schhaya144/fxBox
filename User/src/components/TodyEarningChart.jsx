import React from 'react';
import bg_today from '../assets/DailyProfitRankStage-ce00a6d6.png';

import crown1 from '../assets/crown1-3912fd85.png';
import crown2 from '../assets/crown2-c8aced52.png';
import crown3 from '../assets/crown3-2ca02146.png';
import winner1 from '../assets/av4.png';
import winner2 from '../assets/av5.png';
import winner3 from '../assets/av16.png';
import Topperimg4 from '../assets/av3.png';
import Topperimg5 from '../assets/av7.png';

import no1 from '../assets/place1-fe39c3f3.png';
import no2 from '../assets/place2-8189be28.png';
import no3 from '../assets/place3-d9b0be38.png';

const topperdata = [
  {
    rank: '4',
    Topper4: Topperimg4,
    toppername: 'Mem***YOH',
    Price: '₹11,969,440.00',
  },
  {
    rank: '5',
    Topper4: Topperimg5,
    toppername: 'Mem***Low',
    Price: '₹11,378,4325.27',
  },
];

const TodyEarningChart = () => {
  return (
    <div className=" ">
      <div className="w-full  flex flex-col justify-center items-center mt-5 mb-2  relative">
        <div className="flex justify-start w-full">
          <p className="font-bahnschrift text-19px opacity-80 ms-3 border-l-4 ps-2 border-customRed">
            Today's earnings chart
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div
            style={{
              backgroundImage: `url(${bg_today})`,
              position: 'absolute',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '360px',
              height: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: '125px',
            }}
          >
            {/* -------------------- 2nd topper --------------------- */}
            <div className="relative -top-12 mt-1 right-5 flex flex-col justify-center items-center">
              <img
                src={crown2}
                alt=""
                className="w-12 z-10 relative top-5 right-4"
              />
              <img
                src={winner2}
                alt=""
                className="w-16 rounded-full relative object-fill "
              />
              <img
                src={no2}
                alt=""
                className="w-[70px] object-fill relative -top-1"
              />
              <div className="text-[12.48px] text-white font-semibold relative top-1">
                Mem***XGH
              </div>
              <div className="text-[12.48px] text-white bg-white bg-opacity-40 rounded-xl px-1 mt-5 py-1">
                ₹19,969,440.00
              </div>
            </div>

            {/* -------------------- 1st topper --------------------- */}

            <div className="relative -top-24 -mt-4  flex flex-col justify-center items-center">
              <img
                src={crown1}
                alt=""
                className="w-12 z-10 relative top-10 right-5"
              />
              <img
                src={winner1}
                alt=""
                className="w-16 rounded-full object-fill relative top-5"
              />
              <img
                src={no1}
                alt=""
                className="w-16 relative object-fill top-5"
              />
              <div className="text-sm text-white font-semibold relative top-7">
                Mem***UEF
              </div>
              <div className="text-[12.48px] text-white bg-white bg-opacity-40 rounded-xl px-3 top-12 relative py-1">
                ₹58,532,379.64
              </div>
            </div>
            {/* --------------- 3rd topper --------------------- */}
            <div className="relative -top-20 mt-4 left-8 flex flex-col justify-center items-center">
              <img
                src={crown3}
                alt=""
                className="w-12 z-10 relative top-12 right-5"
              />
              <img
                src={winner3}
                alt=""
                className="w-16 rounded-full object-fill relative top-6"
              />
              <img
                src={no3}
                alt=""
                className="w-16 object-fill relative top-5"
              />
              <div className="text-[12.48px] text-white mt-3 font-semibold relative top-4">
                Mem***OFF
              </div>
              <div className="text-[12.48px] text-white bg-white bg-opacity-40 rounded-xl px-2 relative top-7 py-1">
                ₹12,442,080.00
              </div>
            </div>
          </div>
          <div className="relative top-60 mx-2 w-full">
            {topperdata.map((item, index) => (
              <div
                className="flex h-16 w-full justify-center items-center gap-9 bg-white rounded-md mb-1 px-4"
                key={index}
              ><div className="flex justify-between gap-4 items-center">
                <div className="text-[18.72px] font-semibold opacity-60">
                  {item.rank}
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={item.Topper4}
                    alt=""
                    className="rounded-full w-12 object-fill"
                  />
                  <div className="text-[12.48px] ms-2">{item.toppername}</div>
                </div></div>
                <div className="text-white font-semibold bg-gamenav-gradient px-4 rounded-full py-1 text-base">
                  {item.Price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodyEarningChart;
