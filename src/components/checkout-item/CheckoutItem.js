import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item--img-box">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item--info">{name}</span>
      <span className="checkout-item--info">{quantity}</span>
      <span className="checkout-item--info">{price}</span>
      <div className="checkout-item-remove">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
