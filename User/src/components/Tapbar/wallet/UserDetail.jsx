import React from 'react';
import './wallet.css';
import deposit from '../../../assets/team.webp';
import depositHt from '../../../assets/recharge.webp';
import widthdraw from '../../../assets/withdraw.webp';
import widthdrawHt from '../../../assets/download.webp';
import { Link } from 'react-router-dom';

const UserDetail = () => {
  return (
    <div className=" mt-4">
      {/* border mx-4 rounded-xl border-neon */}
    <div className="flex justify-between w-full my-2 space-x-2 px-6"> 
      <Link to="/Withdrawl" className="flex flex-col items-center">
        <div className="imgD">
          <img
            src={widthdraw}
            alt="Withdraw"
            className="w-[70px] p-2 h-[70px] rounded-3xl"
          />
        </div>
        <div className="text-center text-[13px] font-inter text-gray-300 ">
          Withdraw
        </div>
      </Link>
      <Link to="/deposit" className="flex flex-col items-center">
        <div className="imgD"> <img
            src={depositHt}
            alt="Deposit history"
            className="w-[72px] p-2 h-[72px] rounded-3xl"
          />

        </div>
        <div className="text-center text-[13px] font-inter text-gray-300 ">
          Recharge
        </div>
      </Link>

      <Link to="/depositHT" className="flex flex-col items-center">
        <div className="imgD">
        <img src={deposit} alt="Deposit" className="w-[70px] p-2 h-[70px] rounded-3xl" />
        </div>
        <div className="text-center text-[13px] font-inter text-gray-300 ">
          Team
        </div>
      </Link>

      <Link to="/withdrawalHT" className="flex flex-col items-center">
        <div className="imgD">
          <img
            src={widthdrawHt}
            alt="Withdrawal history"
            className="w-[70px] p-2 h-[70px] rounded-3xl"
          />
        </div>
        <div className="text-center text-[13px] font-inter text-gray-300 ">
          Download
        </div>
      </Link>
    </div></div>
  );
};

export default UserDetail;
