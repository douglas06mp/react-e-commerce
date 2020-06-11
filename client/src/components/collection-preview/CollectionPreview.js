import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  Title,
  Content,
} from './CollectionPreview.style';

export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}) => {
  return (
    <CollectionPreviewContainer>
      <Title
        id="CollectionPreviewTitle"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </Title>
      <Content>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Content>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
