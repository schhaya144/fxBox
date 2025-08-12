import React from "react";

const IconMessageGarbage = () => {
  return (
    <svg
      className="w-5 h-5 text-primary fill-none" // Adjust size and color with Tailwind classes
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol id="icon-messageGarbage" viewBox="0 0 36 36">
        <path
          d="M6.75 7.5V33H29.25V7.5H6.75Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15 15V24.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 15V24.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7.5H33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.5L14.4667 3H21.5828L24 7.5H12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </symbol>
      <use xlinkHref="#icon-messageGarbage" />
    </svg>
  );
};

export default IconMessageGarbage;
