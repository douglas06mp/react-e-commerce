import styled, { css } from 'styled-components';

const labelShrink = css`
  font-size: 1.2rem;
  color: #000;
  top: -14px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 4.5rem 0;

  input[type='password'] {
    letter-spacing: 0.3rem;
  }
`;

export const Inputfield = styled.input`
  background: none;
  background-color: #fff;
  color: grey;
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 2.5rem 0;

  &:focus {
    outline: none;

    & ~ label {
      ${labelShrink}
    }
  }
`;

export const Label = styled.label`
  color: grey;
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.3s ease all;

  ${(props) => (props.value.length ? labelShrink : '')}
`;
