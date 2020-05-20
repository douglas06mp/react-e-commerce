import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelector';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="dropdown">
      <div className="dropdown--items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
