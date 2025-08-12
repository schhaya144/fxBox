import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import BettingStatistics from "./BettingStatistics";

const Card = ({ color, label, value, isNumberCard }) => {
  return (
    
    <div className="flex items-center w-full cursor-pointer">
      <div className="flex items-center w-full p-2 rounded bg-darkSidebar shadow-custom">
        <div
          className={`flex items-center justify-center rounded shadow-lg ${
            isNumberCard ? 'bg-customBlue' : color
          }`}
          style={{ width: "55px", height: "50px" }}
        >
          {isNumberCard ? (
            <h2 className="text-2xl text-white">{value}</h2>
          ) : (
            <div className={`flex items-center justify-center rounded ${color}`} style={{ width: "55px", height: "50px" }}>
              <FaShoppingCart className="text-2xl text-white" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 ml-3">
          <p className="text-white">{label}</p>
          <p className="text-white">{value}</p>
        </div>
      </div>
    </div>
   
  );
};

export default Card;
