import React from 'react';
import dragonbg from '../assets/Image/bj-0907ace0.png';
import dragonlogo from '../assets/Image/dragon.png';
import bgLottery from '../assets/Image/daman-lottery.png';
import buttonarrow from '../assets/right-arrow.png';

import imgWingo from '../assets/Image/wingo.png';
import imgK3 from '../assets/Image/k3.png';
import img5D from '../assets/Image/5D.png';
import imgTrxWingo from '../assets/Image/trxwingo.png';

const GamesImg = [
  {
    gameName: 'Win Go',
    imgs: imgWingo,
    bonusline: 'The highest bonus in history',
    bonus: '₹88,191,180.00',
    cardinfo:
      'Through the platform WIN GO Hash lottery seed as the result of the lottery',
  },
  {
    gameName: 'K3',
    imgs: imgK3,
    bonusline: 'The highest bonus in history',
    bonus: '₹225,769,180.00',
    cardinfo:
      'Through the platform WIN GO Hash lottery seed as the result of the lottery',
  },
  {
    gameName: '5D',
    imgs: img5D,
    bonusline: 'The highest bonus in history',
    bonus: '₹46,569.60',
    cardinfo:
      'Through the platform WIN GO Hash lottery seed as the result of the lottery',
  },
  {
    gameName: 'Trx Win Go',
    imgs: imgTrxWingo,
    bonusline: 'The highest bonus in history',
    bonus: '₹4,704,000.00',
    cardinfo:
      'Through the platform WIN GO Hash lottery seed as the result of the lottery',
  },
];

const Lottery = () => {
  return (
    <div className="relative flex flex-col justify-center w-full px-2 mb-6">
      <div className="mb-4 text-[16.6px] font-bold border-l-4  border-red-500 ps-2">
        Lottery
      </div>
      <div
        className="relative w-full mb-8"
        style={{
          backgroundImage: `url(${dragonbg})`,
          backgroundPosition: 'center',
          width: '100%',
          height: '120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          borderRadius: '15px',
        }}
      >
        <div className="absolute flex items-center justify-center text-white -top-7">
          <img
            src={dragonlogo}
            alt="Dragon Logo"
            className="object-contain p-1 mt-4 w-28"
          />

          <div className="flex flex-col items-start justify-center flex-w ms-3">
            <h4 className="pt-8 text-[15.6px] font-extrabold bahnschrift">
              Win Go Dragon assistant
            </h4>
            <p className="px-4 py-2 mt-1 text-[12px] font-bold bg-red-500 rounded-full bahnschrift flex flex-wrap">
              Five draws in a row with the same result
            </p>
            <button className="py-1 mt-2 font-semibold text-white font-roboto text-[13.5px] rounded-full px-9 bg-gradient-to-t from-yellow-600 to-yellow-300">
              Enter
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-start w-full">
        <p className="text-[16.6px] font-[700] border-l-4 font-bahnschrift border-red-500  ps-2">
          Lottery
        </p>
      </div>

      <div className="relative grid justify-center mx-1 mt-4">
        {GamesImg.map((item, index) => (
          <div
            key={index}
            className="flex w-[100%] relative bg-white my-2 rounded-md p-2"
          >
            <div
              style={{
                backgroundImage: `url(${bgLottery})`,
                backgroundPosition: 'center',
                width: '27%',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: '15px',
              }}
            >
              <div className="mt-2 text-[12.4px] font-bold text-white bahnschrift">
                {item.gameName}
              </div>
              <img
                src={item.imgs}
                className="w-[80px] mt-2"
                alt={item.gameName}
              />
            </div>
            <div className="w-[90%] ps-1">
              <div>
                <div className="flex justify-around ">
                  <div className=" font-bold bahnschrift text-[16.6px]">
                    {item.gameName}
                  </div>
                  <button className="flex items-center justify-center w-24 px-4 font-bold text-center text-white border rounded-full text-[15.6px] bahnschrift ms-20 bg-gamenav-gradient">
                    GO
                    <img
                      src={buttonarrow}
                      className="w-[28px] h-[24px]"
                      alt="Arrow"
                    />
                  </button>
                </div>
                <div className="flex justify-around rounded-lg bg-[#b3b3b321] py-[9.3px] px-[10.4px] items-center m-1">
                  <p className="text-xs font-medium text-gray-800 opacity-80 text-[12px] bahnschrift">
                    {item.bonusline}
                  </p>
                  <span className="text-gray-400 text-[12px]"> | </span>
                  <p className="text-[13.50px] text-orange-400 Roboto">
                    {item.bonus}
                  </p>
                </div>
                <div className="flex">
                  <span className="mt-1 text-sm font-extrabold text-red-600">
                    |
                  </span>
                  <p className="mt-2 text-[11.4px] text-gray-600 ps-2 font-inter">
                    {item.cardinfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lottery;
