import React from "react";
import banner from "../../../assets/superJackpotBanner.png";
import { NavLink } from "react-router-dom";
import NavActivity from "./NavActivity";
import IconSuperNo from "../../../Svg/IconSuperNo";
import IconRule from "../../../Svg/IconRule";
import IconWinningStar from "../../../Svg/IconWinningStar";

const SuperJackpot = () => {
  return (
    <>
      <NavActivity heading={"Super Jackpot"} linkPath={"/ActivityPanel"} />
      {/* Banner image */}
      <div
        className="px-1 flex justify-between bg-cover bg-no-repeat h-[195px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-white font-custom w-[230px] px-2 py-4">
          <h3 className="text-22px font-bold mb-6">Super Jackpot</h3>
          <p className="text-xs mb-2">
            When you get the Super Jackpot in 【Slots】Can get 1 additional
            bonus.
          </p>
          <p className="text-xs leading-tight">
            The reward is valid for 30 days, and <br />
            you will not be able to claim it after it expires!
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="px-3 flex justify-center items-center py-[7px] text-center mx-3 my-3 rounded-full bg-button-gray">
        <IconSuperNo />
        <span className="text-white font-sansSerif text-11px ml-2">
          Receive in batches
        </span>
      </div>

      <div className="flex justify-evenly items-center text-center gap-4 mx-3 mt-5">
  {/* Rules */}
  <NavLink to={"/jackpot-rules"} className="flex justify-center items-center text-center py-2 px-12 bg-white rounded-lg">
    <IconRule />
    <span className="text-gray-800 text-13px font-inter mt-1  ml-3">Rule</span>
  </NavLink>
  
  {/* Winning Start */}
  <div className="flex justify-center items-center text-center py-2  px-6 bg-white rounded-lg">
    <IconWinningStar />
    <span className="text-gray-800 text-13px font-inter mt-1  ml-2">Winning Star</span>
  </div>
</div>

      {/* SVG block */}
      <div className="flex-1 text-center py-2 px-4 bg-white h-[200px] mt-5">
     <div>SVG</div>
        <p className="text-[#768096] text-14px">
          You don't have a big jackpot yet, let's bet
        </p>
      </div>

      {/*Button  */}

      <div className="px-3 py-[7px] text-center mx-5 my-2 bg-timer-gradient rounded-full">
        <button className="text-white text-16px font-sansSerif">Go bet</button>
      </div>
    </>
  );
};

export default SuperJackpot;
