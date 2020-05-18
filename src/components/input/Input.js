import React from 'react';
import './Input.scss';

const Input = ({ handleChange, label, ...props }) => {
  const capitalize = (str) => {
    return str
      .trim()
      .split(' ')
      .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
      .join(' ');
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
