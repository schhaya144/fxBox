import React from 'react';

const ActivityRulesBackgroundIcon = ({
  className,
  fillColor = 'fill-[#f95959]',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 294 61"
      className={`svg-icon icon-activityRulesBackground ${className}`}
      fill="none"
    >
      <path
        d="M0 1.00082C0 1.00082 2.48839 0.849562 6.22476 1.00082L293.555 1.00054C293.656 1.00053 293.757 1.00054 293.856 1.00054L294 1.00054L293.555 1.00054C286.407 1.00119 272.491 1.06227 265 5.43465C256.5 10.3959 252 13.8688 241 36.1943C231.492 55.4919 215.5 60.6698 210 61.0005H85C68 61.0005 55.5 43.1401 52.5 37.1866C49.5 31.2331 46.0048 22.308 35.5 10.892C28.3127 3.0812 14.3314 1.32898 6.22476 1.00082L0 1.00082Z"
        className={fillColor}
      />
      <path
        d="M293.856 1.00054C293.757 1.00054 293.656 1.00053 293.555 1.00054L294 1.00054L293.856 1.00054Z"
        className={fillColor}
      />
    </svg>
  );
};

export default ActivityRulesBackgroundIcon;
