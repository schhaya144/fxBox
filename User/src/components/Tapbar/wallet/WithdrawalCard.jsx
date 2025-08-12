import React, { useState } from "react";
import CopyIcon2 from "../../../Svg/CopyIcon2"; // Adjust this import path if needed
import { GiCheckMark } from "react-icons/gi";

const WithdrawalCard = ({ withdrawal, statusClass }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (transactionID) => {
    navigator.clipboard
      .writeText(transactionID)
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden mb-6 border-white glowing-border-white">
      {/* Card Header */}
      <div className="flex justify-between items-center bg-primary text-white px-6 py-4">
        <span className="text-sm ">Order Number:</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{withdrawal.transactionID}</span>
          <button
            onClick={() => handleCopy(withdrawal.transactionID)}
            className="text-primary hover:text-primary-dark"
          >
            <CopyIcon2 />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 py-4 text-gray-700">
        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-500">Balance:</span>
          <span className="text-red-500 text-sm font-bold">
            ₹{withdrawal.withdrawAmount}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-500">Type:</span>
          <span className="text-gray-500 text-sm font-bold">{withdrawal.withdrawMode}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-500">Time:</span>
          <span className="text-sm text-gray-500">{new Date(withdrawal.withdrawTime).toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm text-gray-500">Withdraw</h4>
          <span className={`p-1 px-3 rounded-full text-sm  ${statusClass}`}>
            {withdrawal.status}
          </span>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed px-6 py-5 text-white bg-black bg-opacity-80 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 9999 }}
        >
          <div className="flex flex-col items-center">
            <GiCheckMark className="text-3xl text-green-500 mb-2" />
            <span className="font-medium">Copy Successful</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawalCard;
