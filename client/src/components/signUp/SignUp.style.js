import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const SignUpContainer = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  ${mediaQuery.down('laptop')} {
    flex-basis: 100%;
    margin: 0;

    button {
      display: block;
      margin: 0 auto;
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
