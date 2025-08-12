import React from 'react';

const PromotionGrades = () => {
  const data = [
    { level: 'L0', teamNumber: '0', teamBetting: '0', teamDeposit: '0' },
    { level: 'L1', teamNumber: '5', teamBetting: '500K', teamDeposit: '100K' },
    { level: 'L2', teamNumber: '10', teamBetting: '1,000K', teamDeposit: '200K' },
    { level: 'L3', teamNumber: '15', teamBetting: '2.50M', teamDeposit: '500K' },
    { level: 'L4', teamNumber: '20', teamBetting: '3.50M', teamDeposit: '700K' },
    { level: 'L5', teamNumber: '25', teamBetting: '5M', teamDeposit: '1,000K' },
    { level: 'L6', teamNumber: '30', teamBetting: '10M', teamDeposit: '2M' },
    { level: 'L7', teamNumber: '100', teamBetting: '100M', teamDeposit: '20M' },
    { level: 'L8', teamNumber: '500', teamBetting: '500M', teamDeposit: '100M' },
    { level: 'L9', teamNumber: '1000', teamBetting: '1,000M', teamDeposit: '200M' },
    { level: 'L10', teamNumber: '5000', teamBetting: '1,500M', teamDeposit: '300M' },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="grid grid-cols-4 text-center font-semibold red-primary text-13px text-white py-4 rounded-t-lg">
        <div>Rebate Level</div>
        <div>Team Number</div>
        <div>Team Betting</div>
        <div>Team Deposit</div>
      </div>
      {data.map((item, index) => (
        <div
        key={index}
        className={`grid grid-cols-4 text-center p-1 border-b last:border-none text-13px ${
          index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
        }`}
        >
          <div className="flex bg-crown items-center justify-end">
            <span className=" rounded-full text-yellow-200 font-semibold mt-2 mr-2">
              {item.level}
            </span>
          </div>
          <div>{item.teamNumber}</div>
          <div>{item.teamBetting}</div>
          <div>{item.teamDeposit}</div>
        </div>
      ))}
    </div>
  );
};

export default PromotionGrades;
