import React from 'react';

const ActivityIntroIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="none"
      className={`svg-icon icon-activityIntro ${className}`}
    >
      <path
        d="M72 59C63.1791 59 56 66.1791 56 75C56 83.8209 63.1791 91 72 91C80.8209 91 88 83.8209 88 75C88 66.1791 80.8209 59 72 59Z"
        fill="currentColor"
      />
      <circle cx="71.75" cy="84.75" r="1.75" fill="var(--text_color_L4)" />
      <rect
        x="70"
        y="75.5"
        width="3.5"
        height="6.5"
        rx="1.75"
        fill="var(--text_color_L4)"
      />
      <path
        d="M72 77C75.3137 77 78 74.3137 78 71C78 67.6863 75.3137 65 72 65C68.6863 65 66 67.6863 66 71C66 71.4413 66.0476 71.8715 66.1381 72.2857"
        stroke="var(--text_color_L4)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13C8 8.58172 11.5817 5 16 5H76C80.4183 5 84 8.58172 84 13V58.9985C80.6574 56.4878 76.5024 55 72 55C60.9543 55 52 63.9543 52 75C52 79.9631 53.8078 84.5039 56.8008 88H16C11.5817 88 8 84.4183 8 80V13ZM20.5 20C19.1193 20 18 21.1193 18 22.5C18 23.8807 19.1193 25 20.5 25H43.5C44.8807 25 46 23.8807 46 22.5C46 21.1193 44.8807 20 43.5 20H20.5ZM20.5 33C19.1193 33 18 34.1193 18 35.5C18 36.8807 19.1193 38 20.5 38H71.5C72.8807 38 74 36.8807 74 35.5C74 34.1193 72.8807 33 71.5 33H20.5ZM18 48.5C18 47.1193 19.1193 46 20.5 46H55.5C56.8807 46 58 47.1193 58 48.5C58 49.8807 56.8807 51 55.5 51H20.5C19.1193 51 18 49.8807 18 48.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ActivityIntroIcon;
