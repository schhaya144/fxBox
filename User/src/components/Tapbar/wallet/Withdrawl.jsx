import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import withdrawBanner from '../../../assets/wallet/withdraw-banner.png';
import withdrawWithdraw from '../../../assets/wallet/balance-withdraw.png';
import RechargeinWallet from './RechargeinWallet';
import ReusableNav from '../../ReuseablenNav';
import refresh from '../../../assets/wallet/refresh.png';
import Icon from '../../../Svg/Icon';
import { MdNavigateNext } from 'react-icons/md';
import IconHistoryHead from '../../../Svg/IconHistoryHead';
import WithdrawTransation from './WithdrawTransation';
import { useSelector } from 'react-redux';
import WithdrawHistoryTable from './WithdrawHistoryTable';
import { GiCheckMark } from 'react-icons/gi';
import { FcRefresh } from 'react-icons/fc';
import Navbar from '../../Navbar';

const Withdrawal = () => {
  const currentUser = useSelector((state) => state?.user?.user);
  console.log('current user', currentUser);

  const [showToast, setShowToast] = useState(false); // State to show/hide toast
  const [showBalance, setShowBalance] = useState(true); // Controls the visibility of the balance

  const handleRefresh = () => {
    // Hide the balance
    setShowBalance(false);

    // Show the toast
    setTimeout(() => {
      setShowBalance(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }, 1000);
  };

  // Calculate the totalBalance and message for withdrawal eligibility
  const totalBalances =
    parseFloat(currentUser?.totalBalance || 0) +
    // parseFloat(currentUser?.totalInvestedAmount || 0) +
    parseFloat(currentUser?.investedEarnings || 0);

  const totalBalance = parseFloat(currentUser?.totalBalance || 0);
  const investedEarnings = parseFloat(currentUser?.investedEarnings || 0);
  // const totalInvestedAmount = parseFloat(currentUser?.totalInvestedAmount || 0);

  const withdrawMessage = `You can only withdraw the recharge of ₹${totalBalance} and income amounts of ₹${investedEarnings}.`;
  // The principal amount of ₹${totalInvestedAmount} cannot be withdrawn until your investment matures
  return (
    <div className="min-h-screen bg-primary">
      {/* Navbar */}
      <Navbar heading={'Withdrawal'} linkPath="/Account" />
      {/* <ReusableNav
        heading="Withdraw"
       
        link1Text="Wallet"
        link2Path="/WithdrawalHT"
        link2Text="Withdrawal History"
      /> */}

      {/* Available Balance Section */}
      <section className="container px-4 mx-auto mt-4 text-white">
        <div className="w-full  px-3 py-2 bg-fxbt-gradient te bg-center bg-no-repeat rounded-lg">
          <div className="flex items-center mt-2.5 mb-1">
            <img
              src={withdrawWithdraw}
              alt="Balance"
              className="w-4 mb-1 mr-2"
            />
            <span className="text-sm font-semibold text-white font-inter">
              Available balance
            </span>
          </div>
          <div className="text-[26px]  text-white font-semiboldfont-inter inline-flex ps-4">
            {/* Rupee Symbol */}
            <span className="text-[26px]">₹</span>
            <span
              className={`inline-block ${
                !showBalance ? 'opacity-0 animate-fade-in-out' : 'opacity-100'
              } transition-opacity duration-700`}
            >
              {totalBalances.toFixed(2)}
            </span>

            {/* Refresh Icon */}
            <div onClick={handleRefresh}>
              <FcRefresh className="w-6 h-4 mt-3 ml-2 text-white" />
            </div>
          </div>

          {/* Withdrawal Message */}
          <div className=" text-12px text-white">
            <p>{withdrawMessage}</p>
          </div>
        </div>
      </section>
      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed inline-block px-6 py-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] rounded-lg shadow-lg top-1/2 left-1/2"
          style={{
            zIndex: 9999,
            transition: 'opacity 0.5s ease-in-out',
            '--van-toast-max-width': '70%',
          }}
        >
          <div className="flex flex-col items-center justify-center ">
            {/* Check Icon */}
            <div className="py-2">
              <GiCheckMark className="text-3xl font-extrabold text-white" />
            </div>
            {/* Refresh Text */}
            <span className="text-sm font-custom2">Refresh</span>

            {/* Successfully Text */}
            <span className="text-sm font-custom2">Successfully</span>
          </div>
        </div>
      )}
      {/* ATM Card */}
      <WithdrawTransation />
    </div>
  );
};

export default Withdrawal;
