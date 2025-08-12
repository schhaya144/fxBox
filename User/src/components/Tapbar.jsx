import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPhoneSquareAlt, FaShare, FaUser } from 'react-icons/fa';
import { BiSolidCoinStack } from 'react-icons/bi';


const Tapbar = () => {
  const location = useLocation();

  const getLinkStyle = (path) =>
    location.pathname === path ? 'text-fxbt-blue' : 'text-gray-500';

  return (
    <div className="sticky bottom-0 z-50 flex items-center w-full bg-black">
      <div className="flex items-center justify-around flex-grow w-full py-3 bg-black">
        {/* Home */}
        <Link to="/home" className="flex flex-col items-center justify-center">
          <FaHome className={`w-6 h-6 ${getLinkStyle('/home')}`} />
          <p className={`text-xs font-semibold ${getLinkStyle('/home')}`}>
            Home
          </p>
        </Link>

        {/* Earnings */}
        <Link
          to="/ActivityPanel"
          className="flex flex-col items-center justify-center"
        >
          <BiSolidCoinStack
            className={`w-6 h-6 ${getLinkStyle('/ActivityPanel')}`}
          />
          <p
            className={`text-xs font-semibold ${getLinkStyle(
              '/ActivityPanel'
            )}`}
          >
            Transaction
          </p>
        </Link>

        {/* Promotion */}
        <Link
          to="/deposit"
          className="flex flex-col items-center justify-center"
        >
          <FaPhoneSquareAlt
            className={`w-6 h-6 ${getLinkStyle('/deposit')}`}
          />
          <p
            className={`text-xs font-semibold ${getLinkStyle('/deposit')}`}
          >
          Recharge
          </p>
        </Link>

        {/* Wallet */}
        <Link
          to="/promotion-panel"
          className="flex flex-col items-center justify-center"
        >
          <FaShare className={`w-6 h-6 ${getLinkStyle('/promotion-panel')}`} />
          <p className={`text-xs font-semibold ${getLinkStyle('/promotion-panel')}`}>
            Share
          </p>
        </Link>

        {/* Account */}
        <Link
          to="/Account"
          className="flex flex-col items-center justify-center"
        >
          <FaUser className={`w-6 h-6 ${getLinkStyle('/Account')}`} />
          <p className={`text-xs font-semibold ${getLinkStyle('/Account')}`}>
            Account
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Tapbar;
