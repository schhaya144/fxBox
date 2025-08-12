import React from 'react';
import CopyIcon from "../svg's/COpyIcon";

const SubordinateLevel = () => {
  return (
    <>
      <div className="p-2 mx-3 mt-4 bg-white rounded-lg">
        <div className="flex items-center py-1 text-base font-bold text-gray-700">
          <span>UID:12345678</span>{' '}
          <span className="px-2">
            <CopyIcon />
          </span>
        </div>
        <hr className="px-4" />
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Level</div>
          <div className="">1</div>
        </div>
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Deposit amount</div>
          <div className="text-orange-500">555</div>
        </div>
        {/* <div className="flex justify-between py-1 font-semibold text-gray-500"> */}
          {/* <div className="">Bet Amounr</div> */}
          {/* <div className="text-orange-500">1546</div> */}
        {/* </div> */}
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Commission</div>
          <div className="text-orange-500">50</div>
        </div>
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Time</div>
          <div className="">2024-09-29</div>
        </div>
      </div>
      <div className="p-2 mx-3 mt-4 bg-white rounded-lg ">
        <div className="flex items-center py-1 text-base font-bold text-gray-700">
          <span>UID:12345678</span>{' '}
          <span className="px-2">
            <CopyIcon />
          </span>
        </div>
        <hr className="px-4" />
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Level</div>
          <div className="">1</div>
        </div>
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Deposit amount</div>
          <div className="text-orange-500">555</div>
        </div>
        {/* <div className="flex justify-between py-1 font-semibold text-gray-500"> */}
          {/* <div className="">Bet Amounr</div> */}
          {/* <div className="text-orange-500">1546</div> */}
        {/* </div> */}
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Commission</div>
          <div className="text-orange-500">50</div>
        </div>
        <div className="flex justify-between py-1 font-semibold text-gray-500">
          <div className="">Time</div>
          <div className="">2024-09-29</div>
        </div>
      </div>
    </>
  );
};

export default SubordinateLevel;
