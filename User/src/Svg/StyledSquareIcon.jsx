import React from 'react';

const StyledSquareIcon = ({ color = '#FE7F76', className }) => {
  return (
    <svg
      width="0.53333rem"
      height="0.53333rem"
      viewBox="0 0 10 10"
      style={{
        transform: 'rotate(45deg)',
        left: '-0.06667rem',
        top: '0.18667rem',
      }}
      className={`${className}`}
    >
      <rect width="10" height="10" fill={color} />
    </svg>
  );
};

export default StyledSquareIcon;
