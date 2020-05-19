import React from 'react';
import './Button.scss';

const Button = ({ children, invert, google, ...props }) => {
  return (
    <button
      className={`button ${google ? 'google' : ''} ${invert ? 'invert' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
