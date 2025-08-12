import React from "react";
import { Link } from 'react-router-dom';
import NavActivity from "./NavActivity";
import banner from "../../../assets/superJackpotRulebg.png";
import SuperJackpotRuleIcon from "../../../Svg/SuperJackpotRuleIcon";
import WarningTriangleIcon from "../../../Svg/WarningTriangleIcon";
import RightTriangleIcon from "../../../Svg/RightTriangleIcon";
import CustomerPublicIcon from "../../../Svg/CustomerPublicIcon";

const JackpotRules = () => {
  const tableData = [
    { winningRate: "20X-299X", accumulatedAmount: "₹10-₹99", bonus: "₹50.00" },
    {
      winningRate: "60X-1999X",
      accumulatedAmount: "₹100-₹8000",
      bonus: "₹300.00",
    },
    {
      winningRate: "40X-59X",
      accumulatedAmount: "₹100-₹8000",
      bonus: "₹200.00",
    },
    {
      winningRate: "30X-39X",
      accumulatedAmount: "₹100-₹8000",
      bonus: "₹100.00",
    },
    {
      winningRate: "20X-29X",
      accumulatedAmount: "₹100-₹8000",
      bonus: "₹50.00",
    },
  ];

  return (
    <div>
      <NavActivity heading="Rule" linkPath={"/super-jackpot"}/>
      <div
        className=" flex bg-cover bg-no-repeat w-[450px] h-[240px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-6 pt-6 text-white font-custom">
          <h3 className="mb-1 font-bold text-17px font-sansSerif">Super Jackpot</h3>
          <p className="text-13px mb-3 text-left leading-[22px] w-[220px] font-sansSerif">
            When you win the Super Jackpot in the game, you can get additional
            platform bonuses, and the bonuses will be distributed to you
            according to the multiple of the winning prize.
          </p>
          <div className="flex space-x-2 rounded-lg px-4 py-4 mr-6 mt-[50px] bg-opacity-50 warningBox">
          <WarningTriangleIcon aria-label="Warning" />  
            <p className="flex justify-between space-x-2 leading-5 font-sansSerif text-11px">
             Warning:Please claim all
              bonuses before the event ends. After the event ends, you will lose
              the chance to get the bonus.
            </p>
          </div>
        </div>
      </div>
      <div className="jackpotRuleBg h-[100px]"></div>

      <div className="mx-2 mt-4">
        <div className="flex items-center space-x-2">
          <SuperJackpotRuleIcon aria-label="Super Jackpot Rules" />
          <h1 className="font-bold text-gray-800 text-17px font-sansSerif">Bonus</h1>
        </div>
        <div className="px-1 mt-3 overflow-x-auto">
          <table className="min-w-full text-center bg-white rounded-lg">
            <thead>
              <tr className="text-white rounded-t-lg red-primary text-12px font-sansSerif">
                <td className="px-3 py-3 rounded-tl-lg">Winning rate</td>
                <td className="py-3">Bet amount</td>
                <td className="py-3 rounded-tr-lg">Bonus</td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#F7F8FF]"
                  }  text-12px font-sansSerif`}
                >
                  <td className="px-3 py-2 text-yellow ">
                    {row.winningRate}
                  </td>
                  <td className="px-3 py-2 text-gray-800">
                    {row.accumulatedAmount}
                  </td>
                  <td className="px-3 py-2 text-primary">{row.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center p-3 mx-5 mt-2 space-x-2 bg-white rounded-lg">
        <p className="flex justify-center space-x-2 text-12px font-sansSerif text-gray-l1">
          <RightTriangleIcon aria-label="Event Information" />
          All event interpretation rights belong to the platform. If you have
          any questions, please contact customer service.
        </p>
      </div>

      <Link to="/customer-service" className="flex items-center justify-center px-4 py-2 mx-3 my-5 space-x-2 rounded-full bg-custom-gradient bg-opacity-70">
        <CustomerPublicIcon aria-label="Customer Service Icon" />{" "}
        <button className="font-semibold text-white text-16px font-sansSerif">
          Contact customer service
        </button>
      </Link>
    </div>
  );
};

export default JackpotRules;
