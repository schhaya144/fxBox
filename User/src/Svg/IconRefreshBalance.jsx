// import React from 'react';

// const IconRefreshBalance = () => {
//   return (
//     <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
//       <svg
//         className="w-6 h-6"
//         viewBox="0 0 43 42"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Rounded Arrow with Curved Ends */}
//         <path
//           d="M31.5 10.5c-4.25 0-8 2.75-9.75 6.5l-1-3c-.25-.75-1-1.25-1.75-1l-2 1c-.75.25-1.25 1-1 1.75l3 9c.25.75 1 1.25 1.75 1l8.5-2.5c.75-.25 1.25-1 1-1.75s-1-1.25-1.75-1l-5.25 1.5C24.5 15.25 28 12 31.5 12c4.75 0 8.5 3.75 8.5 8.5S36.25 29 31.5 29c-2.5 0-4.75-1-6.25-2.5"
//           stroke="#FFFFFF"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="none"
//         />
//         {/* Optional Circle Outline */}
//         <circle cx="21.5" cy="21" r="20" stroke="#FFFFFF" strokeWidth="2" />
//       </svg>
//     </div>
//   );
// };

// export default IconRefreshBalance;
import React from 'react';

const IconRefreshBalance = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
      <svg
        className="w-6 h-6"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4402_98617)">
          <path
            d="M25.1778 22.687C22.5234 25.998 18.623 28 14.3922 28C7.7044 28 1.9602 23.0048 0.5 16.0776L3.279 15.4C4.4466 20.937 9.0428 24.934 14.3922 24.934C17.8726 24.934 21.0716 23.24 23.1982 20.4596L20.1 16.975H28.5V26.425L25.1778 22.687ZM3.8222 5.313C6.4766 2.002 10.377 0 14.6078 0C21.2956 0 27.0398 4.9952 28.5 11.9224L25.721 12.6C24.5534 7.063 19.9572 3.066 14.6078 3.066C11.1274 3.066 7.9284 4.76 5.8018 7.5404L8.9 11.025H0.5V1.575L3.8222 5.313Z"
            fill="white" // Make the arrow white
          />
        </g>
        <defs>
          <clipPath id="clip0_4402_98617">
            <rect width="28" height="28" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconRefreshBalance;
