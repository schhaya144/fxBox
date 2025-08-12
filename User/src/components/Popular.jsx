import React from 'react';
import { Link } from 'react-router-dom';
import StaticGameCards from './StaticGameCards';
import dragonbg from '../assets/Image/bj-0907ace0.png';
import dragonlogo from '../assets/Image/dragon.png';
import wingo from '../assets/Image/wingo.png';
import k3 from '../assets/Image/k3.png';
import game5d from '../assets/Image/5D.png';
import trxwingo from '../assets/Image/trxwingo.png';
import damanLottery from '../assets/Image/daman-lottery.png';
import greaterThen from '../assets/right-arrowB.png';
import { PiGreaterThanBold } from 'react-icons/pi';
import { GrNext } from 'react-icons/gr';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const GamesImg = {
  GamesName: ['Win Go', 'K3', '5D', ' Trx Win Go'],
  href: ['/home/wingo', '/home/k3', '/home/Game5D', '/home/wingo'],
  imgs: [wingo, k3, game5d, trxwingo],
  bgLottery: [damanLottery, damanLottery, damanLottery, damanLottery],
};

const Popular = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between w-full">
        <div className="flex">
          <span className="w-[5px] mt-1 h-5 rounded-xl bg-customRed ms-3"></span>
          <p className="text-xl font-extrabold text-[#1e2637] ms-1.5 ">
            Lottery
          </p>
        </div>
        <button className="flex items-center justify-center h-6 gap-1.5 px-4 mr-3 text-[#768096] border border-[#575a61] rounded-md text-13px">
          <span>
            All <span className="text-[rgb(239,68,68)]">4</span>
          </span>
          <span>
            <MdOutlineArrowForwardIos className="w-3 h-3.5 text-[#768096] text-base " />
          </span>
        </button>
      </div>

      <div className="grid gap-3 grid-cols-2 mt-1 px-2">
        {GamesImg.bgLottery.map((bgSrc, index) => (
         <div key={index} className="popular-background">
            <div className="grid  p-2 text-center">
              <p className="pt-2 text-xl font-bold text-white font-inter">
                {GamesImg.GamesName[index]}
              </p>

              <Link to={GamesImg.href[index]}>
                <img
                  src={GamesImg.imgs[index]}
                  alt={`Game ${index}`}
                  className="w-28 ms-7"
                />
              </Link>

              <Link to={GamesImg.href[index]} className="flex justify-end pe-3">
                <button className="flex justify-center w-10 px-10 mb-1 text-base font-extrabold text-center text-white border border-white rounded-full ms-16">
                  <div className="flex items-center justify-center gap-2">
                    <span>GO</span>
                    <GrNext className="text-sm" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-2 mt-1">
        <div
          className="w-full px-4 mb-1 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${dragonbg})` }}
        >
          <div className="flex items-center py-1 text-white flex-col-2">
            <img
              src={dragonlogo}
              alt="Dragon Logo"
              className="object-contain p-1 mt-4 w-28"
            />
            <div className="flex flex-col items-start ">
              <h4 className="text-base font-bold drop-shadow-xl">
                Win Go Dragon Assistant
              </h4>
              <p className="px-4 py-1 mt-1 text-xs font-bold text-center bg-red-500 rounded-full">
                Five draws in a row with the same result
              </p>
              <button className="px-10 py-1 mt-4 mb-1 font-semibold text-white rounded-full text-13px font-roboto bg-pupular-button">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full px-2">
        <StaticGameCards />
      </div>
    </div>
  );
};

export default Popular;
