import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 8rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2.2rem;
  align-items: center;
`;

export const ImageBox = styled.div`
  flex-basis: 23%;
  padding-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  flex-basis: 23%;
`;

export const Quantity = styled.div`
  flex-basis: 23%;
  display: flex;

  span {
    &:nth-child(odd) {
      cursor: pointer;
    }

    &:nth-child(2) {
      margin: 0 1rem;
    }
  }
`;

export const RemoveButton = styled.div`
  padding-left: 1.8rem;
  cursor: pointer;
`;
