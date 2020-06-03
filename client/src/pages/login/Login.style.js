import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const LoginContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  margin: 3rem auto;

  ${mediaQuery.down('desktop')} {
    width: 75%;
  }

  ${mediaQuery.down('laptopL')} {
    width: 90%;
  }

  ${mediaQuery.down('laptop')} {
    width: 60%;
    flex-direction: column;
  }

  ${mediaQuery.down('tabletL')} {
    width: 70%;
  }

  ${mediaQuery.down('tablet')} {
    width: 85%;
  }

  ${mediaQuery.down('mobileL')} {
    width: 90%;
  }
`;
