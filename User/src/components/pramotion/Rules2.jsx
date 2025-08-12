import React from 'react';
import { PiLinkLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const data = [
  {
    id: '06',
    text: 'The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages. The commission rate is specifically explained as follows',
    rebateLink:"View rebate retio >>"
  },
  {
    id: '07',
    text: 'TOP20 commission rankings will be randomly awarded with  a separate bonus.',
  },
  {
    id: '08',
    text: 'The final interpretation of this activity belongs to Welcome to Daman Games.',
  },
];

const Rules2 = () => {
  return (
    <>
      {data.map((item) => (
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
            <span className="absolute text-lg font-bold text-white">
              {item.id}
            </span>
          </div>
          <p className="px-4 py-2 text-sm leading-relaxed text-gray-700">
            {item.text}
          </p>
          <Link to={'/rebate-ratio'} className='px-4 py-2 text-sm leading-relaxed text-red-500'>{item.rebateLink}</Link>
        </div>
      ))}
    </>
  );
};

export default Rules2;
