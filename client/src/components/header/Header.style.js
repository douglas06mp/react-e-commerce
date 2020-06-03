import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaQuery from '../../styles/mediaQuery';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  position: relative;
`;

export const LogoBox = styled(Link)`
  width: 70px;
  height: 100%;
  padding: 2.5rem;

  svg {
    transform: translate(-20px, -15px);

    ${mediaQuery.down('mobileL')} {
      transform: translate(-20px, -10px) scale(0.8);
    }
  }
`;

export const LinkGroup = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mediaQuery.down('tabletL')} {
    width: 75%;
  }
`;

export const HeaderLink = styled(Link)`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  ${mediaQuery.down('tabletL')} {
    padding: 1rem;
  }

  ${mediaQuery.down('mobileL')} {
    padding: 0.8rem;
  }
`;
