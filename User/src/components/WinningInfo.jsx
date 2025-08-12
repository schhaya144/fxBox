

// export default WinningInfo;
import React, { useState, useEffect } from 'react';
import './WinningInfo.css'; // CSS for the animation
import memberProfiles from '../assets/av12.png';
import memberProfiles2 from '../assets/av2.png';
import memberProfiles3 from '../assets/av3.png';
import memberProfiles4 from '../assets/av4.png';
import memberProfiles5 from '../assets/av5.png';
import memberProfiles6 from '../assets/av6.png';
import memberProfiles7 from '../assets/av7.png';
import memberProfiles8 from '../assets/av8.png';
import memberProfiles9 from '../assets/av9.png';
import memberProfiles10 from '../assets/av10.png';
import memberProfiles11 from '../assets/av11.png';
import memberProfiles12 from '../assets/av13.png';
import priceImg from '../../public/Image/StaticGame/vendorlogo_20240116181202hhjt.png';
import priceImg2 from '../../public/Image/StaticGame/vendorlogo_20240116181623alci.png';

import priceImg3 from '../../public/Image/StaticGame/vendorlogo_20240116181011v5fb.png';
import priceImg4 from '../../public/Image/StaticGame/Rummmy1.png';
import priceImg5 from '../../public/Image/K3.png';
import priceImg6 from '../../public/Image/5d.png';

const winningData = [
  {
    id: 1,
    memberProfile: memberProfiles,
    member: 'Mem***SCD',
    priceImg: priceImg,
    amount: '₹200.00',
  },
  {
    id: 2,
    memberProfile: memberProfiles2,
    member: 'Mem***XYZ',
    priceImg: priceImg,

    amount: '₹150.00',
  },
  {
    id: 3,
    memberProfile: memberProfiles3,
    member: 'Mem***ABC',
    priceImg: priceImg,

    amount: '₹300.00',
  },
  {
    id: 4,
    memberProfile: memberProfiles4,
    member: 'Mem***DEF',
    priceImg: priceImg,

    amount: '₹250.00',
  },
  {
    id: 5,
    memberProfile: memberProfiles5,
    member: 'Mem***GHI',
    priceImg: priceImg2,

    amount: '₹100.00',
  },
  {
    id: 6,
    memberProfile: memberProfiles6,
    member: 'Mem***JKL',
    priceImg: priceImg3,

    amount: '₹500.00',
  },
  {
    id: 7,
    memberProfile: memberProfiles7,
    member: 'Mem***MNO',
    priceImg: priceImg3,

    amount: '₹350.00',
  },
  {
    id: 8,
    memberProfile: memberProfiles8,
    member: 'Mem***PQR',
    priceImg: priceImg2,

    amount: '₹450.00',
  },
  {
    id: 9,
    memberProfile: memberProfiles9,
    member: 'Mem***GHI',
    priceImg: priceImg4,

    amount: '₹100.00',
  },
  {
    id: 10,
    memberProfile: memberProfiles10,
    member: 'Mem***JKL',
    priceImg: priceImg5,

    amount: '₹500.00',
  },
  {
    id: 11,
    memberProfile: memberProfiles11,
    member: 'Mem***MNO',
    priceImg: priceImg5,

    amount: '₹350.00',
  },
  {
    id: 12,
    memberProfile: memberProfiles12,
    member: 'Mem***PQR',
    priceImg: priceImg4,

    amount: '₹450.00',
  },
  {
    id: 13,
    memberProfile: memberProfiles12,
    member: 'Mem***PQR',
    priceImg: priceImg6,

    amount: '₹450.00',
  },
  {
    id: 14,
    memberProfile: memberProfiles12,
    member: 'Mem***PQR',
    priceImg: priceImg6,

    amount: '₹450.00',
  },
  {
    id: 15,
    memberProfile: memberProfiles12,
    member: 'Mem***PQR',
    priceImg: priceImg6,

    amount: '₹450.00',
  },
];

const WinningInfo = () => {
  const [displayedData, setDisplayedData] = useState([...winningData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedData((prevData) => {
        // Rotate the data by prepending the last item
        const lastItem = prevData[prevData.length - 1];
        const updatedData = [lastItem, ...prevData.slice(0, -1)];
        return updatedData;
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex justify-start w-full">
        <div className="text-19px font-extrabold border-l-4  border-red-500 opacity-80 ms-3 ps-2 font-bahnschrift">
          Winning Information
        </div>
      </div>
      <div className="px-2">
        <div className="slider-container">
          {displayedData.slice(0, 5).map((winner, index) => (
            <div className="slider-item bg-white rounded-lg" key={index}>
              <div className="flex items-center justify-around w-full h-12 my-1 slide-in-top py-8">
                <div className="flex items-center">
                  <img
                    src={winner.memberProfile}
                    className="w-12 h-12 rounded-full"
                    alt="Profile"
                  />
                  <div className="text-sm ps-1 font-bahnschrift">{winner.member}</div>
                </div>
                <div className="flex items-center">
                  <img
                    src={winner.priceImg}
                    className="w-[80px] h-12 rounded-md object-fill flex"
                    alt="Prize"
                  />
                  <div className="ps-2 font-bahnschrift">
                    <div className="text-sm font-bahnschrift font-bold">
                      Receive {winner.amount}
                    </div>
                    <p className="text-xs font-normal opacity-50">Winning amount</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinningInfo;
