import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const CheckoutContainer = styled.div`
  width: 60%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  ${mediaQuery.down('laptopM')} {
    width: 65%;
  }

  ${mediaQuery.down('laptop')} {
    width: 75%;
  }

  ${mediaQuery.down('tablet')} {
    width: 85%;
  }

  ${mediaQuery.down('mobileL')} {
    width: 100%;
  }

  button {
    margin: 3rem 0 0 auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Title = styled.h3`
  text-transform: capitalize;
  flex-basis: 23%;
  font-size: 2.2rem;

  &:last-child {
    flex-basis: 8%;
  }
`;

export const Total = styled.div`
  margin: 3rem 0 0 auto;
  font-size: 3.6rem;
  font-weight: bold;
`;

export const Test = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: red;
`;
