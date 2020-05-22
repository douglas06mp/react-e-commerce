import React from 'react';
import { InputContainer, Inputfield, Label } from './Input.style';

const Input = ({ handleChange, label, ...props }) => {
  const capitalize = (str) => {
    return str
      .trim()
      .split(' ')
      .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
      .join(' ');
  };

  return (
    <InputContainer>
      <Inputfield {...props} autoComplete="off" />
      {label ? <Label value={props.value}>{capitalize(label)}</Label> : null}
    </InputContainer>
  );
};

export default Input;
