import React from 'react';
import PromotionGrades from './RulesPramotionGrades';
import Rules2 from './Rules2';

// const data = [
//   { id: '01', text: 'There are 6 subordinate levels in inviting friends. If A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.' },
//   { id: '02', text: 'When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.' },
//   { id: '03', text: "The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately" },
//   { id: '04', text: "The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record." },
//   { id: '05', text: "Commission rates vary depending on your agency level on that day . Number of Teams: How many downline deposits you have to date. Team Deposits: The total number of deposits made by your downline in one day. Team Deposit: Your downline deposits within one day." },
// ];

const Rules = () => {
  return (
    <>
      {/* {data.map((item) => (
        <div key={item.id} className="pt-0 mx-4 mt-4 bg-white rounded-lg">
          <div className="relative flex items-center justify-center">
            <svg
              className="w-8/12 h-12 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489 60"
              fill="currentColor"
            >
              <path
                d="M-2 -0.0310078V-4H492V-0.0310078C485 -0.0310078 470.65 -0.0310078 463 4.43411C454.5 9.39535 450 12.8682 439 35.1938C429.492 54.4913 413.5 59.6693 408 60H83C66 60 53.5 42.1395 50.5 36.186C47.5 30.2326 44.0048 21.3075 33.5 9.89147C23 -1.51938 8 -0.0310078 -2 -0.0310078Z"
                fill="currentColor"
              />
            </svg>
            <span className="absolute text-lg font-bold text-white">{item.id}</span>
          </div>
          <p className="px-4 py-2 text-sm leading-relaxed text-gray-700">{item.text}</p>
        </div>
      ))}
      <PromotionGrades/>
      <Rules2/> */}
    
    
    </>
  );
};

export default Rules;
