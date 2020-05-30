import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  flex-basis: 22%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;

  &:hover {
    div:first-child,
    button {
      opacity: 0.8;
    }
  }

  button {
    width: 80%;
    opacity: 0;
    position: absolute;
    bottom: 5rem;
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
  transition: all 0.4s;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 1.5rem;
`;

export const Price = styled.div`
  width: 10%;
  text-align: right;
`;
