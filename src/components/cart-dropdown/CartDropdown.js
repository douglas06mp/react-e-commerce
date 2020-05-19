import React from 'react';
import Button from '../button/Button';
import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown--items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
