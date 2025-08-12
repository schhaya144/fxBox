import React from "react";
import NavActivity from "./NavActivity";
import StyledSquareIcon from "../../../Svg/StyledSquareIcon";

const AttendanceGameRules = () => {
  const tableData = [
    { id: 1, accumulatedAmount: "200.00", bonus: "4.00" },
    { id: 2, accumulatedAmount: "1,000.00", bonus: "20.00" },
    { id: 3, accumulatedAmount: "3,000.00", bonus: "65.00" },
    { id: 4, accumulatedAmount: "8,000.00", bonus: "180.00" },
    { id: 5, accumulatedAmount: "20,000.00", bonus: "450.00" },
    { id: 6, accumulatedAmount: "80,000.00", bonus: "2,200.00" },
    { id: 7, accumulatedAmount: "200,000.00", bonus: "6,000.00" },
  ];

  return (
    <div>
      <NavActivity heading={"Game Rules"}   linkPath={'/attendance-bonus'} />

      {/* Table Section */}
      <div className="overflow-x-auto px-3 pt-2">
        <table className="min-w-full bg-white text-center rounded-t-lg">
          <thead>
            <tr className="red-primary text-white text-17px rounded-t-xl font-CircularXXWeb">
              <td className=" py-2 rounded-tl-xl leading-[13px]">Continuous attendance</td>
              <td className=" py-2 leading-[13px]">Accumulated amount</td>
              <td className="py-2 rounded-tr-2xl leading-[13px]">Attendance bonus</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? "bg-transparent" : "bg-gray-100"
                }  text-14px`}
              >
                <td className="px-4 py-3 font-sansSerif text-gray-l1">{index + 1}</td>
                <td className="px-4 py-3 font-sansSerif text-gray-l1">
                  {row.accumulatedAmount}
                </td>
                <td className="px-4 py-3 font-sansSerif text-gray-l1">{row.bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rules */}
      <div className="mx-4 bg-white rounded-lg pt-0 text-center mt-4">
        <div className="relative flex justify-center items-center">
          <svg
            className="w-8/12 h-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 489 60"
            fill="currentColor"
          >
            <path
              d="M-2 -0.0310078V-4H492V-0.0310078C485 -0.0310078 470.65 -0.0310078 463 4.43411C454.5 9.39535 450 12.8682 439 35.1938C429.492 54.4913 413.5 59.6693 408 60H83C66 60 53.5 42.1395 50.5 36.186C47.5 30.2326 44.0048 21.3075 33.5 9.89147C23 -1.51938 8 -0.0310078 -2 -0.0310078Z"
              fill="currentColor"
            />
          </svg>
          <span className="absolute text-white font-inter font-semibold text-17px">Rules</span>
        </div>
        <div className="px-2 pb-20 text-gray-l1 text-left font-sansSerif text-13px space-y-2">
          <div className="flex items-start space-x-3 space-y-1">
            <StyledSquareIcon  className='w-3 h-3 mt-[8px]'/>
            <p className="leading-tight">
              The higher the number of consecutive login days, the more rewards
              you get, up to 7 consecutive days.
            </p>
          </div>
         
          <div className="flex items-start space-x-3 space-y-1">
          <StyledSquareIcon  className='w-[7px] h-[7px] mt-[8px]'/>
            <p className="leading-tight">
            During the activity, please check once a day
            </p>
          </div>
          <div className="flex items-start space-x-3 space-y-1">
          <StyledSquareIcon  className='w-[7px] h-[7px] mt-[8px]'/>
            <p className="leading-tight">
            Players with no deposit history cannot claim the bonus
            </p>
          </div>
          <div className="flex items-start space-x-3 space-y-1">
          <StyledSquareIcon  className='w-[7px] h-[7px] mt-[8px]'/>
            <p className="leading-tight">
            Deposit requirements must be met from day one
            </p>
          </div>
          <div className="flex items-start space-x-3 space-y-1">
          <StyledSquareIcon  className='w-[8px] h-[8px] mt-[8px]'/>
            <p className="leading-tight">
            The platform reserves the right to final interpretation of this activity
            </p>
          </div>
          <div className="flex items-start space-x-3 space-y-1">
          <StyledSquareIcon  className='w-[9px] h-[8px] mt-[8px]'/>
            <p className="leading-tight">
            When you encounter problems, please contact customer service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceGameRules;
