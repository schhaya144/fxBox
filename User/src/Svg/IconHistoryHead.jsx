import React from 'react';

const IconHistoryHead = () => {
  return (
    <svg
      className="w-7 h-7" // Adjust size as needed
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Rectangle with main color */}
      <path
        d="M41 10H13V44H41V10Z"
        fill="#EF4444" // Replace with your desired main color
        stroke="#EF4444" // Match main color for the stroke
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Left and Top Border */}
      <path
        d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"
        stroke="#EF4444" // Match main color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* First Horizontal Line with white color */}
      <path
        d="M21 22H33"
        stroke="#FFFFFF" // White color for contrast
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Second Horizontal Line with white color */}
      <path
        d="M21 30H33"
        stroke="#FFFFFF" // White color for contrast
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHistoryHead;
