import React, { useContext, useState } from 'react';
import Topperimg4 from '../../assets/av3.png';
import buttonarrowb from '../../assets/right-arrowB.png';
import { Link, useNavigate } from 'react-router-dom';
import Tapbar from '../Tapbar';

import WalletIcon from '../../Svg/WalletIcon';
import WalletIconwallet from '../../Svg/WalletIconwallet';

import WithdrawIcon from '../../Svg/WithdrawIcon';
import RechargeIcon from '../../Svg/RechargeIcon';
import VaultiIcon from '../../Svg/VaultIcon';
import BetHistoryIcon from '../../Svg/BetHistoryIcon';
import RechargeHisyoryIcon from '../../Svg/RechargeHistoryIcon';
import TradeHistoryIcon from '../../Svg/TradeHistoryIcon';
import MyWithdrawHistoryIcon from '../../Svg/MyWithdrawHistoryIcon';
import IconGifts from '../../Svg/IconGifts';
import IconStats from '../../Svg/IconStats';
import IconLanguage from '../../Svg/IconLanguage';
import IconSettingCenter from '../../Svg/IconSettingCenter';
import IconFeedback from '../../Svg/IconFeedback';
import IconNotification from '../../Svg/IconNotification';
import IconNotificationCenter from '../../Svg/IconNotificationCenter';
import Iconserver from '../../Svg/IconServer';
import Iconguide from '../../Svg/GuideIcon';
import IconAbout from '../../Svg/IconAbout';
import VipIcon from '../../Svg/VipIcon';
import RefreshBalanceIcon from '../../Svg/RefreshBalanceIcon';
import CopyIcon from '../../Svg/CopyIcon';
import copy from '../../assets/copyW.png';
import LogoutIcon from "../svg's/LogoutIcon";
import ROLE from '../role/Role';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../store/UserSlice.js';
import dayjs from 'dayjs';
import SummaryApi from '../../common/SummaryApi.jsx';
import { GiCheckMark } from 'react-icons/gi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const AccountPage = ({ user }) => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const currentUser = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false); // State to show/hide toast
  const [toastMessage, setToastMessage] = useState(''); // State to store toast message
  const [showBalance, setShowBalance] = useState(true); // Controls the visibility of the balance
  const handleRefresh = () => {
    // Hide the balance
    setShowBalance(false);

    // Simulate a refresh delay and show the balance again
    setTimeout(() => {
      setShowBalance(true);
      // Optional: Display a toast message
      setShowToast(true);
      setToastMessage('Refresh Successfully');
      setTimeout(() => setShowToast(false), 2000);
    }, 1000); // Adjust the delay as needed
  };

  const handleCopy = (u_id) => {
    navigator.clipboard.writeText(currentUser?.u_id);
    setToastMessage('Copy Successful');
    setShowToast(true);

    // Hide the toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const navigate = useNavigate();
  console.log('current user', currentUser);

  const lastLoginFormatted = currentUser?.lastLogin
    ? dayjs(currentUser.lastLogin).format('YYYY-MM-DD HH:mm:ss')
    : '2024-03-15 13:05:50';

  // user logout
  const handleLogout = async () => {
    try {
      // Call the logout API
      const response = await fetch(SummaryApi.logout_current_user.url, {
        method: SummaryApi.logout_current_user.method,
        credentials: 'include',
      });

      // Check for network errors or unsuccessful responses
      if (!response.ok) {
        throw new Error('Failed to log out. Please try again.');
      }

      const data = await response.json();

      if (data.success) {
        console.log(data.message); // Use console.log for standard logging
        dispatch(setUserDetails(null)); // Clear user details from state
        navigate('/'); // Redirect to home
      } else if (data.error) {
        console.error(data.message); // Log error message from server
      }
    } catch (error) {
      console.error('Error during logout:', error.message); // Log unexpected errors
    }
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r bg-fxbt-gradient p-4 w-full  rounded-b-3xl h-[240px]">
        <div className="flex items-center mt-5 space-x-4 ms-2">
          <img
            src={Topperimg4}
            alt="Avatar"
            className="object-fill w-20 h-20 bg-cover rounded-full"
          />
          <div className="text-white">
            <div className="mb-3 text-base">
              MEMBERNNGJNO0J <i className="fa-solid fa-crown"></i>
            </div>
            <div className="flex w-32 text-xs text-center bg-blue-400 rounded-full">
              <span className="px-2">UID</span> |
              <div className="flex items-center justify-between">
                <span className="px-3 text-justify">
                  {currentUser?.u_id || 'not found'}
                </span>
                <img
                  src={copy}
                  className="w-3 cursor-pointer"
                  onClick={() => handleCopy(currentUser?.u_id)}
                  alt="Copy"
                />
              </div>
            </div>
            <div className="mt-1 text-12px">
              last login: {lastLoginFormatted}
            </div>
          </div>
        </div>
      </div>

     {/* Balance Section */}
<div className="relative p-4 mx-3 text-white border rounded-lg bg-gray-500/50 border-neon shadow-md-inner mt-7 -top-32">
  {/* User Info */}
  <div className="text-[18px] pt-2 font-semibold font-sans truncate">
    {currentUser?.phone || 'Phone not found'}
  </div>
  <div className="flex items-center gap-2 text-[16px] pt-2">
    <span>ID:</span>
    <span>{currentUser?.u_id || 'ID not found'}</span>
  </div>

  {/* Balance Details */}
  <div className="grid grid-cols-3 gap-4 pt-6 text-center">
    <div className="font-bold text-[18px] text-yellow-500">
      USD{' '}
      {currentUser?.totalInvestedAmount.toFixed(2) || "0.00"}
    </div>
    <div className="font-bold text-[18px] text-yellow-500">
      {currentUser?.totalInvestedPackages || '0'}
    </div>
    <div className="font-bold text-[18px] text-yellow-500">
      USD{' '}
      {currentUser?.investedEarnings.toFixed(2) || "0.00"}
    </div>
  </div>

  {/* Labels */}
  <div className="grid grid-cols-3 gap-4 pt-2 text-center text-[14px]">
    <div>Total Amount</div>
    <div>Total Packages</div>
    <div>Total Earnings</div>
  </div>

  {/* Toast Notification */}
  {showToast && (
    <div
      className="fixed z-50 inline-block px-6 py-4 text-white transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-black/70 top-1/2 left-1/2"
    >
      <div className="flex flex-col items-center text-center">
        {/* Checkmark Icon */}
        <div className="pb-3">
          <GiCheckMark className="text-3xl font-extrabold text-white" />
        </div>
        {/* Main Message */}
        <div className="text-sm font-semibold">{toastMessage.split(' ')[0]}</div>
        {/* Success Message */}
        <div className="text-sm">{toastMessage.split(' ').slice(1).join(' ')}</div>
      </div>
    </div>
  )}
</div>


      <div className="container relative w-full px-4 pt-4 -top-32">
        {/* first Row */}
        <div className="grid w-full grid-cols-2 gap-3 pt-3 text-12px">
          <div className="flex items-center w-full p-3 g-[#57A8A4] text-white border border-fxbt-blue rounded-md shadow">
            <RechargeIcon className="w-9 " />

            <Link to="/deposit">
              <div className="leading-3 text-14px">Recharge</div>
              <span className="text-gray-500 text-12px">
               
              </span>
            </Link>
          </div>
          <div className="flex items-center w-full px-3 py-2 text-white border border-fxbt-blue rounded-md shadow">
            <WithdrawIcon className="w-9" />
            <Link to="/withdrawl">
              <div className="leading-3 text-14px">Withdraw</div>
              <span className="text-gray-500 text-12px">
                
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative px-4 mt-5 rounded-lg -top-32 ">
        <ul className="px-1 pb-3 text-white bg-gray-900 border border-fxbt-blue rounded-lg text-14px">
          {user?.role === ROLE.ADMIN && (
            <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
              <Link
                to="/admin"
                className="flex items-center justify-center space-x-2"
              >
                <IconNotification className="w-8 text-red-500" />
                <span className="text-sm">Administrative</span>
              </Link>
              <div>
                <img
                  src={buttonarrowb}
                  className="w-[18px] h-[18px] opacity-70"
                  alt="Arrow"
                />
              </div>
            </li>
          )}
          <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
            <div
              to="/acoountNotification"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <IconNotification className="w-8 text-fxbt-blue" />
              <span className="text-14px">Message</span>
            </div>
            <div>
              <MdKeyboardArrowRight className="text-xl" />
            </div>
          </li>
          {/* <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
            <Link
              to="/wallet"
              className="flex items-center justify-center space-x-2"
            >
              <IconGifts className="w-8 text-fxbt-blue" />
              <span className="text-14px">Balance Record</span>
            </Link>
            <div>
              <MdKeyboardArrowRight className="text-xl" />
            </div>{' '}
          </li> */}
          <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
            <Link
              to="/depositHt"
              className="flex items-center justify-center space-x-2"
            >
              <RechargeHisyoryIcon className="w-8 text-fxbt-blue me-1" />
              <span className="text-14px">Deposit Record</span>
            </Link>
            <div>
              <MdKeyboardArrowRight className="text-xl" />
            </div>{' '}
          </li>

          <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
            <Link
              to="/WithdrawalHT"
              className="flex items-center justify-center space-x-2"
            >
              <MyWithdrawHistoryIcon className="w-8 me-1" />
              <span className="text-14px">Withdrawal Record</span>
            </Link>
            <div>
              <MdKeyboardArrowRight className="text-xl" />
            </div>{' '}
          </li>
          <li className="flex items-center justify-between px-2 py-3 border-b border-fxbt-blue rounded-lg">
            <Link
              to="/subordinate-data"
              className="flex items-center justify-center space-x-2 cursor-pointer"
            >
              <IconStats className="w-8 text-fxbt-blue" />
              <span className="text-14px">My Team</span>
            </Link>
            <div>
              <MdKeyboardArrowRight className="text-xl" />
            </div>{' '}
          </li>
        </ul>

        <div className="mt-6 text-center">
          <span>
            {currentUser?._id ? (
              <button
                className="flex justify-center w-full py-1 text-lg text-center text-yellow-500 first-letter:bg-gray-900 border border-fxbt-blue rounded-full"
                onClick={handleLogout}
                data-bs-toggle="tooltip"
                title="Log Out"
              >
                <div className="flex items-center justify-center gap-3">
                  <LogoutIcon />
                  <span> Log Out</span>
                </div>
              </button>
            ) : (
              <Link
                to="/"
                className="text-fxbt-blue underline"
                data-bs-toggle="tooltip"
                title="Login/Register"
              >
                Login
              </Link>
            )}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AccountPage;
