import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  Title,
  Content,
} from './CollectionPreview.style';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
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

export default CollectionPreview;
