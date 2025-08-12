import React from "react";
import "./custom.css";
import cross from "../../../assets/unfinish-43bc1495.svg";

const bonusDetails = {
  1: {
    bonus: "Bonus 1",
    amount: "₹55.00",
    inviteesRequired: 1,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 1",
    depositProgress: "0 / 1",
  },
  2: {
    bonus: "Bonus 2",
    amount: "₹155.00",
    inviteesRequired: 3,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 3",
    depositProgress: "0 / 3",
  },
  // Continue adding data for each bonus up to 15
  3: {
    bonus: "Bonus 3",
    amount: "₹555.00",
    inviteesRequired: 10,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 10",
    depositProgress: "0 / 10",
  },
  4: {
    bonus: "Bonus 4",
    amount: "₹1,555.00",
    inviteesRequired: 30,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 30",
    depositProgress: "0 / 30",
  },
  5: {
    bonus: "Bonus 5",
    amount: "₹2,555.00",
    inviteesRequired: 50,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 50",
    depositProgress: "0 / 50",
  },
  6: {
    bonus: "Bonus 6",
    amount: "₹3,355.00",
    inviteesRequired: 70,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 70",
    depositProgress: "0 / 70",
  },
  7: {
    bonus: "Bonus 7",
    amount: "₹5,555.00",
    inviteesRequired: 100,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 10",
    depositProgress: "0 / 100",
  },
  8: {
    bonus: "Bonus 8",
    amount: "₹10,955.00",
    inviteesRequired: 200,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 200",
    depositProgress: "0 / 200",
  },
  9: {
    bonus: "Bonus 9",
    amount: "₹25,555.00",
    inviteesRequired: 500,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 500",
    depositProgress: "0 / 500",
  },
  10: {
    bonus: "Bonus 10",
    amount: "₹48,555.00",
    inviteesRequired: 1000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 1000",
    depositProgress: "0 / 1000",
  },
  11: {
    bonus: "Bonus 11",
    amount: "₹355,555.00",
    inviteesRequired: 5000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 5000",
    depositProgress: "0 / 5000",
  },
  12: {
    bonus: "Bonus 12",
    amount: "₹755,555.00",
    inviteesRequired: 10000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 10000",
    depositProgress: "0 / 10000",
  },
  13: {
    bonus: "Bonus 13",
    amount: "₹1,55,555.00",
    inviteesRequired: 20000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 20000",
    depositProgress: "0 / 20000",
  },
  14: {
    bonus: "Bonus 14",
    amount: "₹3,555,555.00",
    inviteesRequired: 50000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 50000",
    depositProgress: "0 / 50000",
  },
  15: {
    bonus: "Bonus 15",
    amount: "₹7,555,555.00",
    inviteesRequired: 100000,
    rechargePerPerson: "₹500.00",
    inviteesProgress: "0 / 100000",
    depositProgress: "0 / 100000",
  },
};

const BonusCard = ({ data }) => {
  return (
    <div className="relative bg-white rounded-lg p-4 w-full my-4">
      {/* Amount at Top Right */}
      <div className="absolute top-2 right-2 text-orange-300 font-bold text-sm ">
        {data.amount}
      </div>

      {/* Invitee and Recharge Info */}
      <div className="mt-6 mb-5 border-t border-gray-200 pt-3">
        <div className="flex justify-between bg-gray-100 px-2 py-1 mb-2">
          <p className="text-gray-800 text-12px">Number of invitees</p>
          <p className=" text-gray-700 mx-20">
            {data.inviteesRequired}
          </p>
        </div>
        <div className="flex justify-between bg-gray-100 px-2 py-1">
          <p className="text-gray-800 text-12px">Recharge per person</p>
          <p className=" text-red-400 mx-16">
            {data.rechargePerPerson}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center mt-4 px-10 border-t border-dashed border-gray-300 pt-4">
        <div className="text-center border-r boder-gray-200 pr-10">
          <p className="text-orange-500 text-15px">{data.inviteesProgress}</p>
          <p className="text-xs text-gray-600  font-sansSerif">Number of invitees</p>
        </div>
        <div className="text-center">
          <p className="text-red-500 text-15px">{data.depositProgress}</p>
          <p className="text-xs text-gray-600 font-sansSerif">Deposit number</p>
        </div>
      </div>

      {/* Unfinished Button */}
      <div className="mt-4">
        <button className="bg-gray-300 w-full py-2 rounded-full text-17px text-white font-semibold">
          Unfinished
        </button>
      </div>
    </div>
  );
};

const BonusCards = () => {
  return (
    <div className="flex flex-col mx-3 items-center -mt-[15px] z-0">
      {Object.values(bonusDetails).map((card, index) => (
        <div key={index} className="relative w-full ">
          {/* Bonus Header Outside the Card */}
          <div className="absolute top-4 left-0 z-10 py-2 bg-green-600   text-white rounded-tl-lg rounded-br-2xl px-3 font-semibold text-sm flex items-center">
            <span className="mr-1 text-11px font-light font-sansSerif">Bonus</span>
            <span className="bg-white text-gray-400 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
              {index + 1}
            </span>
            <img src={cross} alt="" className="w-6 h-6 ml-8" />
          </div>
          <BonusCard data={card} />
        </div>
      ))}
    </div>
  );
};

export default BonusCards;
