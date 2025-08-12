import React from "react";
import { FaUser } from "react-icons/fa";

const BettingStatistics = () => {
  return (
    <div className="p-6 mt-5 text-white rounded bg-darkSidebar">
      <h2 className="mb-5 text-lg font-semibold ">Betting Statistics</h2>

      {/* Betting Stats Rows */}
      <div className="space-y-3">
        {/* Single Stat */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Avatar/Icon */}
            <div className="flex items-center justify-center text-gray-300 rounded-full bg-gray-50 w-9 h-9">
              <span><FaUser className="h-7 w-7"/></span> {/* Avatar or icon */}
            </div>
            {/* Label */}
            <div className="ml-3 text-sm text-white">Join 2 10</div>
          </div>
          {/* Bar */}
          <div className="flex-1 h-5 mx-4 bg-gray-600 rounded">
            <div
              className="h-5 bg-blue-500 rounded"
              style={{ width: "100%" }}
            ></div>
          </div>
          {/* Time */}
          <div className="text-sm text-gray-400">2024-03-19 3:07:10 PM</div>
        </div>

        {/* Single Stat */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <div className="flex items-center justify-center text-gray-300 rounded-full bg-gray-50 w-9 h-9">
          <span><FaUser className="h-7 w-7"/></span>
            </div>
            <div className="ml-3 text-sm text-white">Join Big 10</div>
          </div>
          <div className="flex-1 h-5 mx-4 bg-gray-600 rounded">
            <div
              className="h-5 bg-yellow-500 rounded"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">2024-03-19 3:07:18 PM</div>
        </div>

        {/* Single Stat */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <div className="flex items-center justify-center text-gray-300 rounded-full bg-gray-50 w-9 h-9">
          <span><FaUser className="h-7 w-7"/></span>
            </div>
            <div className="ml-3 text-sm text-white">Join Small 1</div>
          </div>
          <div className="flex-1 h-5 mx-4 bg-gray-600 rounded">
            <div
              className="h-5 bg-green-500 rounded"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">2024-03-19 3:07:22 PM</div>
        </div>

        {/* Single Stat */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <div className="flex items-center justify-center text-gray-300 rounded-full bg-gray-50 w-9 h-9">
          <span><FaUser className="h-7 w-7"/></span>
            </div>
            <div className="ml-3 text-sm text-white">Join 5 1</div>
          </div>
          <div className="flex-1 h-5 mx-4 bg-gray-600 rounded">
            <div
              className="h-5 bg-blue-500 rounded"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">2024-03-19 3:07:29 PM</div>
        </div>
      </div>
    </div>
  );
};

export default BettingStatistics;
