import React from 'react';

const RuleHeadIcon = ({
  className = 'w-72 h-auto',
  fillColor = 'fill-red-500',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 489 60"
      className={`svg-icon icon-ruleHead ${className}`}
      fill="none"
    >
      <path
        d="M-2 -0.0310078V-4H492V-0.0310078C485 -0.0310078 470.65 -0.0310078 463 4.43411C454.5 9.39535 450 12.8682 439 35.1938C429.492 54.4913 413.5 59.6693 408 60H83C66 60 53.5 42.1395 50.5 36.186C47.5 30.2326 44.0048 21.3075 33.5 9.89147C23 -1.51938 8 -0.0310078 -2 -0.0310078Z"
        className={fillColor}
      />
    </svg>
  );
};

export default RuleHeadIcon;
