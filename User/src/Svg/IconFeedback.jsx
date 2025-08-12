// IconFeedback.jsx
import React from 'react';

const IconFeedback = ({ className = 'w-6 h-6 text-main-color' }) => (
  <svg
    className={`svg-icon icon-feedback ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    fill="none"
    aria-hidden="true"
  >
    <symbol id="icon-feedback" viewBox="0 0 60 60">
      <path
        opacity="0.4"
        d="M40.6016 9.12109H19.4016C13.2266 9.12109 8.22656 14.1461 8.22656 20.2961V43.8211C8.22656 49.9711 13.2516 54.9961 19.4016 54.9961H40.5766C46.7516 54.9961 51.7516 49.9711 51.7516 43.8211V20.2961C51.7766 14.1211 46.7516 9.12109 40.6016 9.12109Z"
        fill="currentColor"
      />
      <path
        d="M35.875 5H24.125C21.525 5 19.4 7.1 19.4 9.7V12.05C19.4 14.65 21.5 16.75 24.1 16.75H35.875C38.475 16.75 40.575 14.65 40.575 12.05V9.7C40.6 7.1 38.475 5 35.875 5ZM37.5 32.375H20C18.975 32.375 18.125 31.525 18.125 30.5C18.125 29.475 18.975 28.625 20 28.625H37.5C38.525 28.625 39.375 29.475 39.375 30.5C39.375 31.525 38.525 32.375 37.5 32.375ZM30.95 42.375H20C18.975 42.375 18.125 41.525 18.125 40.5C18.125 39.475 18.975 38.625 20 38.625H30.95C31.975 38.625 32.825 39.475 32.825 40.5C32.825 41.525 31.975 42.375 30.95 42.375Z"
        fill="currentColor"
      />
    </symbol>
    <use xlinkHref="#icon-feedback" />
  </svg>
);

export default IconFeedback;
