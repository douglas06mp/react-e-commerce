import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const CategoryContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;
  cursor: pointer;
  height: ${(props) => (props.size === 'large' ? '380px' : '240px')};

  ${mediaQuery.down('tablet')} {
    min-width: 45%;
    height: 28rem;
  }

  ${mediaQuery.down('mobileL')} {
    min-width: 100%;
    margin: 0 0 3rem 0;
  }

  &:hover > * {
    &:first-child {
      transform: scale(1.1);
    }
    &:nth-child(2) {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
  transition: all 0.4s;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 1.6rem;
`;
