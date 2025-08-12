import React from 'react';

const PhoneIcon = ({ className }) => {
  return (
    <svg
      className={`${className} fill-fxbt-blue`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        opacity="0.6"
        d="M7.2 9.2C7.2 5.89 9.89 3.2 13.2 3.2H34.8C38.11 3.2 40.8 5.89 40.8 9.2V28H7.2V9.2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.8 29.6H7.2V38.8C7.2 42.11 9.89 44.8 13.2 44.8H34.8C38.11 44.8 40.8 42.11 40.8 38.8V29.6ZM20 33.6C19.12 33.6 18.4 34.32 18.4 35.2C18.4 36.08 19.12 36.8 20 36.8H28C28.88 36.8 29.6 36.08 29.6 35.2C29.6 34.32 28.88 33.6 28 33.6H20Z"
      />
    </svg>
  );
};

export default PhoneIcon;
