// RightTriangleIcon.jsx
import React from "react";

const RightTriangleIcon = ({ className = "w-7 h-7 text-primary mr-2 -mt-1" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 24"
      fill="currentColor"
      className={`svg-icon icon-rightTriangle ${className}`}
    >
      <path d="M20 10.2679C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16666 24.0281 0.499999 23.0659 0.499999 21.5263L0.5 2.47372C0.5 0.934117 2.16667 -0.0281317 3.5 0.741669L20 10.2679Z" />
    </svg>
  );
};

export default RightTriangleIcon;
