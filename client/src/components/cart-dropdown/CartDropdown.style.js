import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #000;
  background-color: #fff;
  top: 8rem;
  right: 0;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const Items = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Empty = styled.span`
  font-size: 2rem;
  margin: 5rem auto;
`;
