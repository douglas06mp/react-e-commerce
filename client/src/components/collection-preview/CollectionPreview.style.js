import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQuery.down('tabletL')} {
    flex-wrap: wrap;
  }
`;
