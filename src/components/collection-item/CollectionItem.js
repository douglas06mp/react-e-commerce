import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection">
      <div
        className="collection--img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection--footer">
        <div className="collection--name">{name}</div>
        <div className="collection--price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
