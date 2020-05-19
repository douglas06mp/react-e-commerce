import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="preview">
      <h1 className="preview--title">{title.toUpperCase()}</h1>
      <div className="preview--content">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
