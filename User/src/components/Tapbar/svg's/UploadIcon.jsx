import React from 'react';

const UploadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      fill="none"
      className="svg-icon"
    >
      <defs>
        <clipPath id="clip0_2238_60810">
          <rect width="42" height="42" fill="white" />
        </clipPath>
        <symbol id="icon-uploadIcon" viewBox="0 0 42 42">
          <g clipPath="url(#clip0_2238_60810)">
            <mask
              id="mask0_2238_60810"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="42"
              height="42"
            >
              <path d="M42 0H0V42H42V0Z" fill="#333333" />
            </mask>
            <g mask="url(#mask0_2238_60810)">
              <path
                d="M5.25 21.0073V36.75H36.75V21"
                stroke="var(--main-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.875 13.125L21 5.25L13.125 13.125"
                stroke="var(--main-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.9922 28V5.25"
                stroke="var(--main-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </symbol>
      </defs>
      <use xlinkHref="#icon-uploadIcon" />
    </svg>
  );
};

export default UploadIcon;
