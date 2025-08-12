import React from 'react';

const SubordinateDisplayData = () => {
  return (
    <div className="p-2 m-3 mx-3 text-white rounded-lg commission bg-primary">
      <div className="flex justify-between my-4">
        <div className="flex-1 commission__body">
          <div className="text-center border-r-2 ">
            <div className="font-bold text-19px ">0</div>
            <div className="text-white text-12px">Deposit Number</div>
          </div>

          <div className="mt-3 text-center border-r-2">
          <div className="font-bold text-19px ">0</div>
          <div className="text-white text-12px">Number of subordinates</div>
          </div>
          <div className="mt-3 text-center border-r-2">
          <div className="font-bold text-19px ">0</div>
          <div className="text-white text-12px">Number of people making first deposit</div>
          </div>
        </div>

        <div className="flex-1 commission__body ">
          <div className="text-center ">
          <div className="font-bold text-19px ">0</div>
          <div className="text-white text-12px">Deposit Amount</div>
          </div>

          <div className="mt-3 text-center">
          <div className="font-bold text-19px ">0</div>

            <div className="text-white text-12px">
              Total subordinates
            </div>
          </div>
          <div className="mt-3 text-center">
          <div className="font-bold text-19px ">0</div>

            <div className="text-white text-12px">
              First Deposit amount
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubordinateDisplayData;
