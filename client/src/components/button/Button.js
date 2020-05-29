import React from 'react';
import { ButtonContainer } from './Button.style';

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
