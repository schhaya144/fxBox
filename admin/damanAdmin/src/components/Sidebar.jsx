import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';


import { HiUser } from 'react-icons/hi2';
import {
  FaTachometerAlt,
  FaUserCircle,
  FaUsers,
  FaChartPie,
  FaCreditCard,
  FaUniversity,
  FaCogs,
} from 'react-icons/fa';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { RiGiftFill } from 'react-icons/ri';

function Sidebar({ isOpen }) {
  return (
    <div className="flex w-full bg-black shadow-2xl ">
      {/* Sidebar */}
      <aside className="flex flex-col h-full px-3 py-2 text-lg font-normal leading-relaxed text-left w-72 bg-black text-grayCustom shadow-lg transition-all duration-300 hover:w-80 hover:shadow-2xl">
        <div className="my-3 px-2 mb-4 border-b-[1px] border-solid pb-4 text-center">
          <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full">
            <FaRegCircleUser className="text-6xl text-fxbt-blue" />
          </div>
          <h3 className="text-xl mt-2">Admin</h3>
        </div>

        {/* Navigation Links */}
        <ul className="flex-grow mt-1">
          {[
             {
              path: '/calculate-interest',
              icon: <RiGiftFill className="flex-shrink-0 w-6 h-6" />,
              label: 'Daily Interest',
            },
            {
              path: '/members',
              icon: <FaUserCircle className="flex-shrink-0 w-6 h-6" />,
              label: 'Members',
            },
            {
              path: '/browse-recharge',
              icon: <FaCreditCard className="flex-shrink-0 w-6 h-6" />,
              label: 'Browse Recharge',
            },
            {
              path: '/browse-withdrawal',
              icon: <FaUniversity className="flex-shrink-0 w-6 h-6" />,
              label: 'Browse Withdrawal',
            },
            {
              path: '/levels-setting',
              icon: <FaCogs className="flex-shrink-0 w-6 h-6" />,
              label: 'Level Setting',
            },
            {
              path: '/created-salary',
              icon: <FaCogs className="flex-shrink-0 w-6 h-6" />,
              label: 'Created Salary',
            },
            {
              path: '/deposit-reward',
              icon: <RiGiftFill className="flex-shrink-0 w-6 h-6" />,
              label: 'Deposit Reward',
            },
            {
              path: '/recharge-approved',
              icon: (
                <MdOutlineFormatListBulleted className="flex-shrink-0 w-6 h-6" />
              ),
              label: 'Recharge (Approved)',
            },

            {
              path: '/withdrawal-approved',
              icon: (
                <MdOutlineFormatListBulleted className="flex-shrink-0 w-6 h-6" />
              ),
              label: 'Withdrawal (Approved)',
            },
            {
              path: '/manageUPI',
              icon: (
                <MdOutlineFormatListBulleted className="flex-shrink-0 w-6 h-6" />
              ),
              label: 'Manage UPI',
            },
            {
              path: '/create-package',
              icon: <RiGiftFill className="flex-shrink-0 w-6 h-6" />,
              label: 'Create Package',
            },
            {
              path: '/user-wallet',
              icon: <RiGiftFill className="flex-shrink-0 w-6 h-6" />,
              label: 'User Wallet',
            },
           
          ].map(({ path, icon, label }) => (
            <li key={path} className="mb-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded transition-all duration-200 ${
                    isActive
                      ? 'bg-fxbt-gradient  text-white'
                      : 'hover:bg-teal-100/50 '
                  }`
                }
              >
                {icon}
                <span className="ml-3 text-lg whitespace-nowrap">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow bg-[#464d55] w-full">
        <main className="flex-grow w-full mt-2">
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
