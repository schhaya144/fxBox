// IconNotificationCenter.jsx
import React from 'react';

const IconNotificationCenter = ({ className = 'w-6 h-6 text-red-500' }) => (
  <svg
    className={`svg-icon icon-notificationCenter ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    fill="none"
    aria-hidden="true"
  >
    <symbol id="icon-notificationCenter" viewBox="0 0 60 60">
      <path
        d="M21 34H12V50.5C12 52.9853 14.0146 55 16.5 55C18.9854 55 21 52.9853 21 50.5V34Z"
        fill="currentColor"
      />
      <path
        opacity="0.6"
        d="M23.75 15H11.25C9.17887 15 7.5 16.6789 7.5 18.75V31.25C7.5 33.3211 9.17887 35 11.25 35H25"
        fill="currentColor"
      />
      <path
        opacity="0.6"
        d="M42.5 17.5H45C49.1421 17.5 52.5 20.8579 52.5 25C52.5 29.1421 49.1421 32.5 45 32.5H42.5"
        fill="currentColor"
      />
      <path
        d="M42.2432 42.5C42.3851 42.5 42.5 42.3849 42.5 42.2428V7.75724C42.5 7.61518 42.3851 7.5 42.2432 7.5H37.9706C28.3219 7.5 20.5 15.3351 20.5 25C20.5 34.6649 28.3219 42.5 37.9706 42.5H42.2432Z"
        fill="currentColor"
      />
    </symbol>
    <use xlinkHref="#icon-notificationCenter" />
  </svg>
);

export default IconNotificationCenter;
