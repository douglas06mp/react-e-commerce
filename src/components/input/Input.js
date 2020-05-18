import React from 'react';
import './Input.scss';

const Input = ({ handleChange, label, ...props }) => {
  const capitalize = (str) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  };

  return (
    <div className="input">
      <input className="input--input" {...props} autoComplete="off" />
      {label ? (
        <label className={`input--label ${props.value.length ? 'shrink' : ''}`}>
          {capitalize(label)}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
