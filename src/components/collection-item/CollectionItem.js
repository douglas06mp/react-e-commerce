import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
import Button from '../button/Button';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
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
      <Button onClick={() => addItem(item)} invert>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
