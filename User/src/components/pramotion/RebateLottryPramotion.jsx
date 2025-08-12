import React from 'react';

const rebateLevels = [
  { level: 1, rebateText: "1 level lower level commission rebate", percentage: "0.6%" },
  { level: 2, rebateText: "2 level lower level commission rebate", percentage: "0.6%" },
  { level: 3, rebateText: "3 level lower level commission rebate", percentage: "22.6%" },
  { level: 4, rebateText: "4 level lower level commission rebate", percentage: "0.6%" },
  { level: 5, rebateText: "5 level lower level commission rebate", percentage: "8.6%" },
  { level: 6, rebateText: "6 level lower level commission rebate", percentage: "4.6%" },
];

const rebateSections = [
  { title: 'L0' },
  { title: 'L2' },
  { title: 'L3' },
  { title: 'L4' },
  { title: 'L5' },
  { title: 'L6' },
  { title: 'L7' },
  { title: 'L8' },
  { title: 'L9' },
  // Add more levels as needed
];

const RebateLotteryPromotion = () => {
  return (
    <>
      {rebateSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className='bg-white rounded-lg mt-3 p-4'>
          <h4 className="text-lg font-semibold text-14px">
            Rebate Level <span className='text-primary text-21px font-bold italic'>{section.title}</span>
          </h4>
          {rebateLevels.map((rebate, index) => (
            <div key={index} className="flex justify-between items-center relative">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-3 h-3 text-red-500"
                >
                  <circle cx="10" cy="10" r="9.4" fill="white" stroke="var(--main-color)" strokeWidth="1.2" />
                  <circle cx="10" cy="10" r="5" fill="var(--main-color)" />
                </svg>

                {/* Dashed line above the SVG */}
                <div
                  className="absolute border-l-[.61333rem] dashed"
                  style={{
                    borderLeft: `.01333rem dashed var(--darkLight, var(--main-color))`,
                    height: '.2rem',
                    top: '-0.2rem',
                    left: '.34667rem',
                  }}
                ></div>

                {/* Dashed line below the SVG */}
                <div
                  className="absolute border-l-[.61333rem] dashed"
                  style={{
                    borderLeft: `.01333rem dashed var(--darkLight, var(--main-color))`,
                    height: '.2rem',
                    top: '1.4rem',
                    left: '.30667rem',
                  }}
                ></div>

                <span className="ml-2 text-13px font-appleSystem text-gray-600 pt-2">{rebate.rebateText}</span>
              </div>
              <span className='text-13px font-appleSystem text-gray-900 pt-2'>{rebate.percentage}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default RebateLotteryPromotion;
