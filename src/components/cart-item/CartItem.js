import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" className="cart-item--img" />
      <div className="cart-item--content">
        <span className="cart-item--name">{name}</span>
        <span className="cart-item--price">
          {quantity} &times; ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
