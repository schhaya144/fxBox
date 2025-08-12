import React from 'react';

const EventDescriptionArrowIcon = ({
  className = 'w-4 h-5',
  fillColor = 'fill-gray-300',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      className={`svg-icon icon-eventDescriptionArrow ${className}`}
      fill="none"
    >
      <path
        d="M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z"
        className={fillColor}
      />
    </svg>
  );
};

export default EventDescriptionArrowIcon;
