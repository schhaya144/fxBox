import React from 'react';
import { Link } from 'react-router-dom';

import IconMessageGarbage from '../../Svg/IconMessageGarbage';
import IconNotification from '../../Svg/IconNotification';

const AccountNotification = () => {
  // Notification data
  const notifications = [
    {
      title: "LOGIN NOTIFICATION",
      timestamp: "2024-11-12 13:07:13",
      message: "Your account has been logged in at 2024-11-12 13:07:13",
    },
  
    {
      title: "LOGIN NOTIFICATION",
      timestamp: "2024-11-12 13:07:13",
      message: "Your account has been logged in at 2024-11-12 13:07:13",
    },
  
    {
      title: "LOGIN NOTIFICATION",
      timestamp: "2024-11-12 13:07:13",
      message: "Your account has been logged in at 2024-11-12 13:07:13",
    },
  
    {
      title: "LOGIN NOTIFICATION",
      timestamp: "2024-11-12 13:07:13",
      message: "Your account has been logged in at 2024-11-12 13:07:13",
    },
  
    {
      title: "LOGIN NOTIFICATION",
      timestamp: "2024-11-12 13:07:13",
      message: "Your account has been logged in at 2024-11-12 13:07:13",
    },
  
  ];

  return (
    <>
      {/* Header Section */}
      <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-2 bg-white text-black">
        <Link className="text-3xl text-black md:text-2xl" to="/account">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
          </svg>
        </Link>
        <div className="flex-1 text-center py-3 pr-3 text-xl">Notification</div>
      </div>

      {/* Notification List */}
      <div className="px-3 py-2 mt-1 bg-[#F7F8FF]">
        {notifications.map((notification, index) => (
          <div key={index} className="p-3 mb-2 rounded-lg bg-white">
            <div className="flex items-center justify-between">
              {/* Notification Icon and Title */}
              <div className="flex items-center space-x-1 font-bold text-black text-md">
                <IconNotification className="w-5 text-gray-600" />
                <span>{notification.title}</span>
              </div>

              {/* Delete Icon */}
              <IconMessageGarbage
                onClick={() => console.log(`Delete clicked for notification ${index}`)}
              />
            </div>

            {/* Timestamp */}
            <div className="text-xs text-gray-400">{notification.timestamp}</div>

            {/* Message Content */}
            <div className="mt-3 text-xs text-gray-600 font-semibold">
              {notification.message}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccountNotification;
