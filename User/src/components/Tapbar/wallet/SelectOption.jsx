// import React, { useState } from 'react';
// import QuickPayIcon from '../../../Svg/QuickPayIcon';

// const SelectOption = () => {
//   // Set the default selected box to the first one
//   const [activeBox2, setActiveBox2] = useState(1);

//   // Function to handle box click and set the selected box
//   const handleBoxClick2 = (boxNumber) => {
//     setActiveBox2(boxNumber);
//   };

//   return (
//     <div className="shadow-sm rounded-md ">
//       <div className="bg-white py-3 pb-8 px-3 rounded-lg">
//         <div className="text-[17.1px]  inline-flex gap-4 text-[#1E2637]">
//           <QuickPayIcon color="text-red-500  " size="w-7 h-7" />
//           <span className=""> Select channel</span>
//         </div>

//         {/* Second Section with 6 Boxes */}
//         <div className="grid grid-cols-2 gap-3 mt-3">
//           {Array.from({ length: 7 }, (_, index) => {
//             const boxNumber = index + 1;
//             const isActive = activeBox2 === boxNumber;

//             return (
//               <div
//                 key={`section2-${boxNumber}`}
//                 onClick={() => handleBoxClick2(boxNumber)}
//                 className={`p-3 rounded-xl cursor-pointer transition-colors duration-300 ${
//                   isActive
//                     ? 'bg-gamenav-gradient text-white'
//                     : 'bg-gray-100 text-gray-500'
//                 }`}
//               >
//                 <p className="">7Days - APP</p>
//                 <p className="">Balance: 100 - 50K</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectOption;

import React, { useState } from 'react';
import QuickPayIcon from '../../../Svg/QuickPayIcon';

const SelectOption = ({ onOptionSelect }) => {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = (boxNumber, optionLabel) => {
    setActiveBox(boxNumber);
    if (onOptionSelect) {
      onOptionSelect(optionLabel); // Pass the selected option up
    }
  };

  const options = [
    { id: 1, label: '7Days - APP', balance: '100 - 50K' },
    { id: 2, label: '14Days - APP', balance: '200 - 100K' },
    { id: 3, label: '30Days - APP', balance: '300 - 150K' },
    { id: 4, label: '60Days - APP', balance: '500 - 200K' },
    { id: 5, label: '90Days - APP', balance: '1K - 500K' },
    { id: 6, label: '120Days - APP', balance: '2K - 1M' },
  ];

  return (
    <div className=" rounded-md">
      <div className="bg-white py-3 pb-8 px-3 rounded-lg">
        <div className="text-[17.1px] inline-flex gap-4 text-[#1E2637]">
          <QuickPayIcon color="text-red-500" size="w-7 h-7" />
          <span>Select channel</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleBoxClick(option.id, option.label)}
              className={`p-3 rounded-xl cursor-pointer transition-colors duration-300 ${
                activeBox === option.id
                  ? 'bg-gamenav-gradient text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              <p>{option.label}</p>
              <p>Balance: {option.balance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
