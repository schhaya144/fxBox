import React from 'react';

const IconChess = ({ width = 24, height = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={width}
    height={height}
    fill='none'
    className="svg-icon"
  >
    <defs>
      <radialGradient id="chessGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#B8DBC8" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
    </defs>

    {/* Outer Ellipse */}
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="17.8"
      stroke={color}
      strokeWidth="1.5"
      fill="url(#chessGradient)"
    />

    {/* Inner Ellipse */}
    <ellipse
      cx="24"
      cy="24"
      rx="12"
      ry="11.5"
      stroke="#B8DBC8"
      strokeWidth="1"
      fill="none"
      opacity="0.7"
    />

    {/* Chess Piece Shape */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 41.85C33.94 41.85 42 33.86 42 24 42 14.14 33.94 6.16 24 6.16 14.06 6.16 6 14.14 6 24c0 9.86 8.06 17.85 18 17.85zm3.7-21.6c1.44 1.39 2.91 2.8 3.27 3.97.86 2.76-0.76 4.87-3.4 4.87-1.22 0-2.08-.5-2.66-1.05-.04.34 0 .8.14 1.3.21.82.78 1.53 1.04 1.77v.5h-4.1v-.5c.26-.24.73-.9.98-1.77.17-.49.19-.98.14-1.33-.55.55-1.38 1.08-2.53 1.08-2.47 0-4.5-2.08-3.54-5.01.4-1.22 1.87-2.64 3.3-4.02.28-.27.56-.55.84-.82 1.44-1.43 2.58-2.77 2.8-3.02.02-.03.04-.04.04-.04s.01.02.03.05c.2.24 1.33 1.59 2.77 3.02.29.28.58.56.87.84z"
      fill={color}
    />

    {/* Circles and Cross Lines */}
    <circle cx="24" cy="24" r="3" fill={color} opacity="0.8" />
    <circle cx="24" cy="24" r="1.5" fill="#B8DBC8" />

    {/* Cross Lines */}
    <path d="M18 24 L30 24" stroke="#B8DBC8" strokeWidth="0.8" opacity="0.6" />
    <path d="M24 18 L24 30" stroke="#B8DBC8" strokeWidth="0.8" opacity="0.6" />

    {/* Outer Border */}
    <ellipse
      cx="24"
      cy="24"
      rx="17"
      ry="17.5"
      fill="none"
      stroke="black"
      strokeOpacity="0.1"
      strokeWidth="0.8"
    />
  </svg>
);

export default IconChess;
