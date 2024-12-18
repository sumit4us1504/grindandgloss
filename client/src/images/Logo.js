import React from 'react';

const Logo = ({ className, style }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 300"
      style={style}
      className={className}
    >
      <text
        x="50%"
        y="45%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: 'Arial Black, sans-serif',
          fontSize: '120px',
          fontWeight: '900',
          letterSpacing: '2px',
        }}
      >
        GRIND
      </text>
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{
          fontFamily: 'Brush Script MT, cursive',
          fontSize: '100px',
          letterSpacing: '1px',
        }}
      >
        &amp; Gloss
      </text>
    </svg>
  );
};

export default Logo;
