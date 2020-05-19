import React from 'react';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <Bag className="cart-icon--svg" />
      <span className="cart-icon--count">0</span>
    </div>
  );
};

export default CartIcon;
