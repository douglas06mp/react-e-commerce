import styled, { css } from 'styled-components';

const BasicButtonStyle = css`
  background-color: #fff;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #000 50%
  );
  background-size: 230%;
  color: #000;
  border: 2px solid #000;

  &:hover {
    background-position: 100%;
    color: #fff;
  }
`;

const invertButtonStyle = css`
  background-color: #000;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 230%;
  color: #fff;
  border: 2px solid #000;

  &:hover {
    background-position: 100%;
    color: #000;
  }
`;

const googleButtonStyle = css`
  background-color: #fff;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #db4437 50%
  );
  background-size: 230%;
  color: #db4437;
  border: 2px solid #db4437;

  &:hover {
    background-position: 100%;
    color: #fff;
  }
`;

const getButtonStyle = (props) => {
  if (props.google) return googleButtonStyle;

  return props.invert ? invertButtonStyle : BasicButtonStyle;
};

export const ButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 4rem;
  padding: 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: 0.4s ease all;

  ${getButtonStyle}
`;
