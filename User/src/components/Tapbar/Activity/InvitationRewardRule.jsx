import React from "react";
import NavActivity from "./NavActivity";
import StyledSquareIcon from "../../../Svg/StyledSquareIcon";

const InvitationRewardRule = () => {
  const tableData = [
    { id: 1, invite: "1People", depositAmount: "₹500.00", bonus: "₹55.00" },
    { id: 2, invite: "3People", depositAmount: "₹500.00", bonus: "₹155.00" },
    { id: 3, invite: "10People", depositAmount: "₹500.00", bonus: "₹555.00" },
    { id: 4, invite: "30People", depositAmount: "₹500.00", bonus: "₹1,555.00" },
    { id: 5, invite: "50People", depositAmount: "₹500.00", bonus: "₹2,555.00" },
    { id: 6, invite: "70People", depositAmount: "₹500.00", bonus: "₹3,355.00" },
    { id: 7, invite: "100People", depositAmount: "₹500.00", bonus: "₹5,555.00" },
    { id: 8, invite: "200People", depositAmount: "₹500.00", bonus: "₹10,955.00" },
    { id: 9, invite: "500People", depositAmount: "₹₹500.00", bonus: "₹25,555.00" },
    { id: 10, invite: "1000People", depositAmount: "₹500.00", bonus: "₹48,555.00" },
    { id: 11, invite: "5000People", depositAmount: "₹500.00", bonus: "₹355,555.00" },
    { id: 12, invite: "10000People", depositAmount: "₹500.00", bonus: "₹755,555.00" },
    { id: 13, invite: "20000People", depositAmount: "₹500.00", bonus: "₹1,555,555.00" },
    { id: 14, invite: "500000People", depositAmount: "₹500.00", bonus: "₹3,555,555.00" },
    { id: 15, invite: "100000People", depositAmount: "₹500.00", bonus: "₹7,555,555.00" },
  ];

  return (
    <div>
      <NavActivity heading={"Invitation reward rules"} linkPath={'/invitation-bonus'} />

      {/* Description Section */}
      <div className="text-gray-500 text-[13.65px] font-sansSerif ps-[10px] pe-[6px] pt-3">
        <p className="mb-[5px] leading-[15px]">Invite friends and recharge to get additional platform <br />rewards!</p>
        <p  className="leading-[15px]">After being claimed, the rewards will be directly distributed to the wallet balance within 10 minutes.</p>
      </div>

{/* Table Section */}
<div className="overflow-x-auto py-3 px-3 mt-1">
  <table className="min-w-full bg-white text-center rounded-t-lg  border-spacing-0">
    <thead className="red-primary">
      <tr className="text-white text-16.5px font-sansSerif rounded-t-lg">
        <td className="py-2 ps-[5px] rounded-tl-lg">Invite account</td>
        <td className="py-2 ">Deposit amount</td>
        <td className="py-2 px-2 rounded-tr-lg">Bonus</td>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, index) => (
        <tr
          key={row.id}
          className={`${
            index % 2 === 0 ? "bg-transparent" : "bg-gray-100"
          } font-sansSerif text-14px`}
        >
          <td className="px-32py-3 text-gray-l1">{row.invite}</td>
          <td className="px-2 py-3 text-gray-l1">{row.depositAmount}</td>
          <td className="px-2 py-3 text-gray-l1">{row.bonus}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Rules */}
      <div className="mx-4 bg-white rounded-lg pt-0 text-center mt-4">
        <div className="relative flex justify-center items-center">
          <svg className="w-8/12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 60" fill="currentColor">
            <path
              d="M-2 -0.0310078V-4H492V-0.0310078C485 -0.0310078 470.65 -0.0310078 463 4.43411C454.5 9.39535 450 12.8682 439 35.1938C429.492 54.4913 413.5 59.6693 408 60H83C66 60 53.5 42.1395 50.5 36.186C47.5 30.2326 44.0048 21.3075 33.5 9.89147C23 -1.51938 8 -0.0310078 -2 -0.0310078Z"
              fill="currentColor"
            />
          </svg>
          <span className="absolute text-white font-inter text-17px font-semibold">Rules</span>
        </div>
        <div className="px-4 pb-4 text-gray-l1 text-13px font-sansSerif text-left">
          <div className="flex items-start space-x-2 mb-3">
          <StyledSquareIcon  className='w-[17px] h-[17px]'/>
            <p className="leading-tight">Only when the number of invited accounts is reached and each account can meet the recharge amount can you receive the bonus.</p>
          </div>
          <div className="flex items-start space-x-2  mb-3">
          <StyledSquareIcon  className='w-[17px] h-[17px]'/>
            <p  className="leading-tight">The invitation account meets the requirements, but the recharge amount of the account does not meet the requirements, and the bonus cannot be claimed.</p>
          </div>
          <div className="flex items-start space-x-2  mb-3">
          <StyledSquareIcon  className='w-3 h-3'/>
            <p className="leading-tight">Please claim the event bonus within the event period. All bonuses will be cleared after the event expires.</p>
          </div>
          <div className="flex items-start space-x-2  mb-3">
          <StyledSquareIcon  className='w-3 h-3'/>
            <p className="leading-tight">Please complete the task within the event period. After the event expires, the invitation record will be cleared.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationRewardRule;
