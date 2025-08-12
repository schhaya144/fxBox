import React from "react";
import NavActivity from "./NavActivity";
import banner from "../../../assets/attendance.png";
import rupeeImage from "../../../assets/coin.png";
import gift from "../../../assets/giftAttendance.png";
import { NavLink } from "react-router-dom";

const AttendanceBonus = () => {
  const cardsData = [
    { id: 1, rupee: "4.00", day: 1, img: rupeeImage },
    { id: 2, rupee: "20.00", day: 2, img: rupeeImage },
    { id: 3, rupee: "65.00", day: 3, img: rupeeImage },
    { id: 4, rupee: "180.00", day: 4, img: rupeeImage },
    { id: 5, rupee: "450.00", day: 5, img: rupeeImage },
    { id: 6, rupee: "2,200.00", day: 6, img: rupeeImage },
  ];

  return (
    <div>
      <NavActivity heading={"Attendance"}  linkPath={'/ActivityPanel'} />

      {/* Banner Section */}
      <div
        className="bg-cover bg-no-repeat h-[265px] bg-center bg-[#F54545] text-white px-4 pt-6"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-21px font-sansSerif">Attendance bonus</h1>
        <p className="text-12px font-sansSerif w-3/5 -mt-1 leading-tight">
          Get rewards based on consecutive login days
        </p>
        <div
          className="w-44 h-13 mt-4 text-[#f95959] px-[5px] pb-[7px] pt-2 font-sansSerif text-14px leading-3 bg-white"
          style={{
            clipPath: "polygon(100% 0, 90% 50%, 100% 100%, 0 100%, 0 0)",
            WebkitClipPath: "polygon(100% 0, 90% 50%, 100% 100%, 0 100%, 0 0)",
            wordBreak: "break-all",
          }}
        >
          Attended consecutively
          <div className="-mt-1">
          <span className="text-xl font-bold mx-1">0</span>
          Day
          </div>
        </div>
        <p className="text-12px mt-2 font-sansSerif leading-tight">Accumulated</p>
        <span className="text-21px font-bold font-sansSerif">0.00</span>

        <div className="flex justify-between mt-4 text-13px">
         <NavLink to={"/attendance-game-rules"}> <button className="yellowBtn text-center font-sansSerif rounded-full px-8 py-[6px]">
            Game Rules
          </button></NavLink>
          <button className="yellowBtn font-sansSerif text-center rounded-full px-3 py-[6px">
            Attendance history
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3  gap-2 p-4">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg px-3 py-1 flex flex-col items-center text-center"
          >
            <h1 className="mb-3 text-gray-800 text-17px">{card.rupee}</h1>
            <img src={card.img} alt="Rupee" className="w-11 h-11 mb-3" />
            <p className="text-13px  text-gray-500">{card.day} Day</p>
          </div>
        ))}
      </div>
      {/* 7-Day Bonus Section */}
      <div className="bg-white rounded-lg flex items-center justify-between p-2 mx-4 ">
        <div>
          <img src={gift} alt="Gift Icon" className="w-36 h-24" />
        </div>
        <div className="text-center flex mr-16 flex-col items-center">
          <p className="text-17px mb-3">6,000.00</p>
          <p className="text-17px text-gray-500">7 Day</p>
        </div>
      </div>

      <div className="ml-12  w-3/4 py-2 text-center mx-2  my-14 bg-timer-gradient rounded-full">
        <button className="text-white text-19px font-sansSerif">Attendance</button>
      </div>
    </div>
  );
};

export default AttendanceBonus;
