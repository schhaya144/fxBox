import React from 'react';

const DownIcon = ({ className }) => {
  return (
    <div>
      {/* SVG Symbol Definition (Hidden) */}
      <svg style={{ display: 'none' }}>
        <symbol
          id="icon-down"
          viewBox="0 0 48 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9999 29.0001L12 17.0001H19.9999V6.00012H27.9999V17.0001H35.9999L23.9999 29.0001Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 37H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M34 44H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </symbol>
      </svg>

      {/* Icon Usage */}
      <svg className={`${className} fill-current`}>
        <use xlinkHref="#icon-down" />
      </svg>
    </div>
  );
};

export default DownIcon;
