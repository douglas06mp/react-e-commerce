import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const SignInContainer = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  ${mediaQuery.down('laptop')} {
    flex-basis: 100%;
    margin-bottom: 20rem;
  }

  button {
    ${mediaQuery.down('mobileL')} {
      min-width: 60%;
      margin-bottom: 3rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin: 1rem 0;

  ${mediaQuery.down('laptop')} {
    text-align: center;
  }
`;

export const Subtitle = styled.span`
  font-size: 2rem;

  ${mediaQuery.down('laptop')} {
    text-align: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQuery.down('laptop')} {
    justify-content: space-around;
  }

  ${mediaQuery.down('mobileL')} {
    flex-wrap: wrap;
  }
`;
