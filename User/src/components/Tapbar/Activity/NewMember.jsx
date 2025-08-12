import React from "react";
import "./custom.css";
import EventTime from "./EventTime";
import NavActivity from ".//NavActivity";

const NewMember = ({ title }) => {
  return (
    <>
      <NavActivity heading="Activity details"  linkPath={'/ActivityPanel'} />

      <div className="bg-orange-500 bg-new-member-gradient text-white h-[160px] w-full">
        <div className="px-4 py-2">
          <h1 className="text-19px font-bold font-sansSerif mb-2">
            New member gift package
          </h1>
          <h3 className="text-sm font-custom mb-[8px]">
            There are two types of new member gift package rewards:
          </h3>
          <p className="text-11px font-sansSerif  mb-[3px]">
            <span className="inline-flex justify-center items-center w-4 h-4 rounded-full bg-white text-orange-400  mr-2">
              1
            </span>
            Bonus for first deposit negative profit
          </p>
          <p className="text-11px font-sansSerif  mb-2">
            <span className="inline-flex justify-center items-center w-4 h-4  rounded-full bg-white text-orange-400 mr-2">
              2
            </span>
            Play games and get bonuses only for new members
          </p>
          <button className="border border-white bg-transparent font-sansSerif rounded-full px-2  py-[3px] text-12px text-white">
            Activity details
          </button>
        </div>
      </div>

      {/* Event time */}
      <EventTime />
    </>
  );
};

export default NewMember;
