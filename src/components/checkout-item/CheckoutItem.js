import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cartAction';
import './CheckoutItem.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="checkout-item--img-box">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="checkout-item--info">{name}</div>
      <div className="checkout-item--info quantity">
        <span className="checkout-item--arrow" onClick={() => removeItem(item)}>
          &#10094;
        </span>
        <span className="checkout-item--value">{quantity}</span>
        <span className="checkout-item--arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </div>
      <div className="checkout-item--info">${price}</div>
      <div className="checkout-item--remove" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { addItem, removeItem, clearItem })(CheckoutItem);
