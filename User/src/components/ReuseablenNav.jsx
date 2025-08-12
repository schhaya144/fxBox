import React from 'react';
import { Link } from 'react-router-dom';

const ReusableNav = ({ heading, link1Path, link1Text, link2Path, link2Text }) => {
  return (
    <nav className="sticky top-0 bg-white py-2 px-1 flex items-center justify-between ">
      <Link className="flex items-center" to={link1Path}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
        </svg>
      </Link>
      <span className="text-gray-900  text-xl pl-16 py-1 flex-1 text-center font-inter">
        {heading}
      </span>
      <Link to={link2Path} className="text-black font-custom text-[13px] pr-1">
        {link2Text}
      </Link>
    </nav>
  );
};

export default ReusableNav;
