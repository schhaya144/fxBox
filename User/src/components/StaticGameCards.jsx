import React from 'react';
import staticimg from '../assets/Image/daman-lottery.png';
import img800 from '../assets/Image/StaticGame/800.png';
import img810 from '../assets/Image/StaticGame/810_20240830182104829.png';
import img110 from '../assets/Image/StaticGame/110.png';
import img22001 from '../assets/Image/StaticGame/22001.png';
import img22004 from '../assets/Image/StaticGame/22004.png';
import img235 from '../assets/Image/StaticGame/235.png';
import img7006 from '../assets/Image/StaticGame/7006.png';
import imgHarlecoin from '../assets/Image/StaticGame/harlecoin0000000.png';
import imgKitchenDrqFrenzy from '../assets/Image/StaticGame/kitchendrqfrenzy.png';
import imgWarOfGods from '../assets/Image/StaticGame/warofgods0000000.png';
import img8910 from '../assets/Image/StaticGame/8910 (1).png';
import imgVendor1 from '../assets/Image/StaticGame/vendorlogo_2024011618151716a4.png';
import imgVendor2 from '../assets/Image/StaticGame/vendorlogo_202401161814358lat.png';
import imgVendor3 from '../assets/Image/StaticGame/vendorlogo_20240116181633lq6j.png';
import imgVendor4 from '../assets/Image/StaticGame/vendorlogo_20240116181623alci.png';
import imgVendor5 from '../assets/Image/StaticGame/vendorlogo_20240116181611q84s.png';
import imgVendor6 from '../assets/Image/StaticGame/vendorlogo_202401161815076psg.png';
import imgSports1 from '../assets/Image/StaticGame/vendorlogo_20240116181202hhjt.png';
import imgSports2 from '../assets/Image/StaticGame/vendorlogo_20240116181151vd4w.png';
import imgSports3 from '../assets/Image/StaticGame/vendorlogo_20240116181140kbrq.png';
import imgSports4 from '../assets/Image/StaticGame/vendorlogo_20240116181011v5fb.png';
import imgCasino1 from '../assets/Image/StaticGame/CrazyTime0000001.png';
import imgCasino2 from '../assets/Image/StaticGame/AmericanTable001.png';
import imgCasino3 from '../assets/Image/StaticGame/48z5pjps3ntvqc1b.png';
import imgCasino4 from '../assets/Image/StaticGame/AndarBahar000001.png';
import imgCasino5 from '../assets/Image/StaticGame/ROU_EN.png';
import imgCasino6 from '../assets/Image/StaticGame/BacBo00000000001.png';
import imgFishing1 from '../assets/Image/StaticGame/AB3.png';
import imgFishing2 from '../assets/Image/StaticGame/AT01.png';
import imgFishing3 from '../assets/Image/StaticGame/AT05.png';
import imgFishing4 from '../assets/Image/StaticGame/GO02.png';
import imgFishing5 from '../assets/Image/StaticGame/7001.png';
import imgFishing6 from '../assets/Image/StaticGame/7002.png';
import imgRummy1 from '../assets/Image/StaticGame/Rummmy1.png';
import imgRummy2 from '../assets/Image/StaticGame/Rummy2.png';
import { GrNext } from 'react-icons/gr';

const StaticGameCards = () => {
  const StaticGameCardsdata = [
    {
      id: 1,
      name: 'Original',
      no: 35,
      bgcard: staticimg,
      gameCimg: [img800, img810, img110, img22001, img22004, img235],
    },
    {
      id: 2,
      name: 'Platform recommendation',
      no: 6,
      gameCimg: [
        img800,
        img7006,
        imgHarlecoin,
        imgKitchenDrqFrenzy,
        imgWarOfGods,
        img8910,
      ],
      progressOds: 'odds of',
      progressOdsValue: ['88.6%', '92.6%', '83.6%', '84.6%', '86.6%', '82.6%'],
    },
    {
      id: 3,
      name: 'Slots',
      no: 8,
      gameCimg: [
        imgVendor1,
        imgVendor2,
        imgVendor3,
        imgVendor4,
        imgVendor5,
        imgVendor6,
      ],
    },
    {
      id: 4,
      name: 'Sports',
      no: 4,
      gameCimg: [imgSports1, imgSports2, imgSports3, imgSports4],
    },
    {
      id: 5,
      name: 'Casino',
      no: 29,
      gameCimg: [
        imgCasino1,
        imgCasino2,
        imgCasino3,
        imgCasino4,
        imgCasino5,
        imgCasino6,
      ],
    },
    {
      id: 6,
      name: 'Fishing',
      no: 29,
      bgcard: staticimg,
      gameCimg: [
        imgFishing1,
        imgFishing2,
        imgFishing3,
        imgFishing4,
        imgFishing5,
        imgFishing6,
      ],
    },
    {
      id: 7,
      name: 'Rummy',
      no: 2,
      gameCimg: [imgRummy1, imgRummy2],
    },
  ];

  return (
    <>
      {StaticGameCardsdata.map((item) => (
        <div key={item.id} className="mb-6">
          <div className="flex justify-between w-full mb-2 mt-8">
            <p className="font-black text-17px font-bahnschrift text-black opacity-80 border-l-4 ps-2 border-red-400">
              {item.name}
            </p>
            <button className="border border-black px-4 text-opacity-20 border-opacity-50 rounded-lg">
              <div className="flex justify-center items-center text-11px text-gray-500 gap-2">
                <span>
                  All <span className="text-red-500"> {item.no}</span>
                </span>
                <GrNext className="text-gary-600 text-11px" />
              </div>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 h-full w-full">
            {item.gameCimg.map((imgSrc, index) => (
              <div
                key={index}
                className={`h-48 flex flex-col justify-center items-center rounded-2xl ${
                  item.id === 1 || item.id === 6 ? 'relative' : ''
                }`}
                style={{
                  backgroundImage:
                    item.id === 1 || item.id === 6
                      ? `url(${item.bgcard})`
                      : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  paddingBottom: '0px',
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Game Image ${index}`}
                  className={`flex justify-center rounded-lg mb-1 ${
                    item.id === 1 || item.id === 6 ? 'bg-opacity-100' : ''
                  }`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                  }}
                />
                {item.id === 2 && item.progressOdsValue && (
                  <div className="w-full">
                    <div className="w-full bg-gray-200 rounded-md h-4">
                      <div
                        className="red-primary h-4 rounded-md"
                        style={{
                          width: item.progressOdsValue[index],
                        }}
                      >
                        <div className="text-11px flex justify-between px-1">
                          <span>{item.progressOds}</span>
                          <span>{item.progressOdsValue[index]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default StaticGameCards;
