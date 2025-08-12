import React from "react";
import NavActivity from "./NavActivity";
import SliderTabActivity from "./SliderTabActivity";
import IconRebateRealTime from "../../../Svg/IconRebateRealTime";

import IconRebate from "../../../Svg/IconRebate";

const BettingRebate = () => {
  return (
    <>
      <NavActivity heading={"Rebate"} linkPath={"/ActivityPanel"} />
      <div className="mx-2">
        <SliderTabActivity />
        <div className="bg-white rounded-lg px-3 py-2 mt-3">
          <h1 className="text-14px font-thin font-custom text-gray-800  font-11px">
            All-Total betting rebate
          </h1>
          <div className="flex  items-center border border-red-500 rounded-lg w-2/5  text-center text-primary px-2 text-11px font-sansSerif ">
            {" "}
            <IconRebateRealTime />{" "}
            <span className="ml-1 py-1 text-11px"> Real-time count</span>
          </div>
          <div className="flex items-center mt-2">
            <IconRebate />
            <span className="font-semibold text-19px ml-2 font-sansSerif text-gray-800">
              0.00
            </span>
          </div>

          {/*  */}

          <div className="px-3 py-1 rounded-lg bg-gray-l3 mt-1">
            <span className="text-gray-l2 text-11px font-sansSerif ">
              Upgrade VIP level to increase rebate rate
            </span>
          </div>

          <div className="flex justify-between gap-3 mt-2">
            <div className="flex-1 py-2 px-4 bg-gray-l3 rounded-lg font-custom">
              <h1 className="text-gray-l2 text-11px font-sansSerif font-medium">
                Today's Rebate
              </h1>
              <p className="font-bold text-15px text-yellow">0</p>
            </div>
            <div className="flex-1 py-2 px-4 bg-gray-l3 rounded-lg font-custom">
              <h1 className="text-gray-l2 text-11px font-sansSerif font-medium">
                Total Rebate
              </h1>
              <p className="font-bold text-15px text-yellow">0</p>
            </div>
          </div>

          <div className="text-gray-l2 font-sansSerif text-11px mt-2">
            Automatic code washing at 01:00:00 every morning
          </div>

          {/*Button  */}
          <div className="px-3 py-[7px] text-center font-sansSerif text-15px font-thin text-gray-900 mt-3 bg-gray-l2 rounded-full">
            <button>One-Click Rebate</button>
          </div>
        </div>

        {/* Rebate History */}
        <div className="mt-2 mx-3">
          <h1 className="text-19px font-sansSerif font-bold border-l-4  text-gray-800 border-l-red-500  pl-2">
            Rebate History
          </h1>
        </div>

        {/*Button  */}
        <div className="px-3 mx-3 py-2 text-center mt-3 border border-red-500 text-12px font-sansSerif text-primary rounded-full">
          <button>All History</button>
        </div>
      </div>
    </>
  );
};

export default BettingRebate;
