import React from 'react';

const RiskProtocalIcon = ({
  className,
  mainColor = 'fill-red-400',
  secondaryOpacity = 'opacity-40',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={`svg-icon icon-riskProtocal ${className}`}
      fill="none"
    >
      <path
        d="M32.38 4H15.64C8.34 4 4 8.34 4 15.62V32.36C4 39.64 8.34 43.98 15.62 43.98H32.36C39.64 43.98 43.98 39.64 43.98 32.36V15.62C44 8.34 39.66 4 32.38 4Z"
        className={`${mainColor} ${secondaryOpacity}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 4V24.84C32.5 26.12 32.12 27.08 31.46 27.46C30.78 27.86 29.7 27.66 28.5 26.94L25.86 25.36C24.84 24.74 23.16 24.74 22.14 25.36L19.5 26.94C18.3 27.66 17.22 27.84 16.54 27.46C15.88 27.08 15.5 26.12 15.5 24.84V4H32.5Z"
        className={mainColor}
      />
    </svg>
  );
};

export default RiskProtocalIcon;
