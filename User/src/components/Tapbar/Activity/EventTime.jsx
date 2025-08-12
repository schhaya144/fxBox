import React from "react";
import IconActivityNote from "../../../Svg/IconActivityNote"

const EventTime = () => {
  return (
    <>
      <div className="bg-white rounded-lg mx-4 pt-0 text-center mt-1">
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
          <span className="absolute text-white font-inter text-17px font-semibold">
            Event start time
          </span>
        </div>
        <h2 className="text-primary font-bold font-sansSerif text-17px -mt-1">2024-08-23 00:00:00</h2>
      </div>

      {/* Condition Table */}
      <div className="mx-3 bg-white rounded-lg pt-0 text-center mt-4">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="red-primary text-16px  font-CircularXXWeb text-white">
              <td className="ps-2 py-3 text-left leading-none rounded-tl-lg w-2/6">
                Conditions of participation
              </td>
              <td className="py-3 pe-8 text-center leading-none w-3/6">
                Get bonus the <br /> next day
              </td>
              <td className="py-3 text-center pe-2 leading-none rounded-tr-lg w-1/6">
                Bonus limit
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className=" text-14px py-5">
              <td className="px-2 py-2 border-r leading-none border-spacing-2">First deposit <br />for new users</td>
              <td className="border-r border-spacing-2 px-2 leading-none py-2">
                Total negative profit rebate for the day <br />
                <span className="text-primary">5%</span>
              </td>
              <td className="px-2 py-2">
                <span className="text-primary">₹200.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Note */}
      <div className="mx-4 flex  bg-white rounded-lg p-2 text-center mt-4">
      <IconActivityNote/>   <h1 className="text-primary ml-2 text-left font-sansSerif text-12px">
         The membership system that meets the standard automatically
          distributes bonuses
        </h1>
      </div>
    </>
  );
};

export default EventTime;
