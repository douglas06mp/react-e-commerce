import React from 'react';
import './Button.scss';

const Button = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={`button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
