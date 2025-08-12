import React from "react";
import NavActivity from "./NavActivity";
import banner from "../../../assets/invitation_bg.png";
import "./custom.css";
import BonusCards from "./BonusCards";
import { NavLink } from "react-router-dom";
import invitation from "../../../assets/inviterule-c8d78199.svg"
import invitationRecord from "../../../assets/inviterecord-610ce16f.svg"

const InvitationBonus = () => {
  return (
    <>
      <NavActivity heading={"Invitation bonus"}  linkPath={'/ActivityPanel'} />
      {/* Banner image */}
      <div
        className="px-[5px] flex justify-between bg-contain bg-no-repeat h-[190px] bg-orange-400 text-white bg-invitationCardbg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-[5px] pt-[12px] w-[65%]">
          <h1 className="text-19px  font-sansSerif mb-3">
            Invite friends and deposit
          </h1>
          <p className="text-12px font-sansSerif mb-[8px]">
            Both parties can receive rewards
          </p>
          <p className="text-12px font-sansSerif leading-[15px] mb-[7px]">
            Invite friends to register and recharge <br />to receive rewards
          </p>
          <p className="text-11px font-sansSerif mb-1">activity date</p>
          <h1 className="text-19px  font-custom mb-[7px]">
            2000-01-01 - 2099-01-01
          </h1>
        </div>
      </div>

      {/* Invitation options */}
      <div className="flex justify-between items-center mx-6 px-8 mt-[-11px] bg-white rounded-lg mb-10 relative z-10">
        <div className="flex flex-col items-center">
          <div className=" rounded-full pt-3 mb-2">
            <NavLink to="/invitation-rewards-rules">
              <img
                src={invitation}
                alt="Invitation reward rules"
                className="w-[50px] h-[50px] mr-5"
              />
            </NavLink>
          </div>
          <div className="text-12px font-sansSerif -mt-[5px] text-gray-l1">Invitation reward rules</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full pt-3 mb-2 mr-2">
            <img
              src={invitationRecord}
              alt="Invitation record"
              className="w-[50px] h-[50px]"
            />
          </div>
          <div className="text-12px font-sansSerif -mt-[5px] text-gray-l1">Invitation record</div>
        </div>
      </div>

      <BonusCards />
    </>
  );
};

export default InvitationBonus;
