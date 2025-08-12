import React from "react";

const Card = ({ orderNumber, amount, state, date }) => {
  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden mb-4 border border-white">
      {/* Heading */}
      <div className="bg-primary text-white text-sm font-bold p-3">
        Order Number: {orderNumber}
      </div>
      {/* Content */}
      <div className="bg-white text-black p-4">
        <div className="mb-2">
          <label className="text-gray-500">Amount:</label>
          <span className="text-red-500 font-bold ml-2">{amount}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-500">State:</label>
          <span className="text-red-500 font-bold ml-2">{state}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-500">Date:</label>
          <span className="text-gray-500 font-bold ml-2">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
