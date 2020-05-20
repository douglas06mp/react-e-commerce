import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleDropdown } from '../../redux/cart/cartAction';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, toggleDropdown }) => {
  return (
    <div className="dropdown">
      <div className="dropdown--items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="dropdown--empty">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          toggleDropdown();
          history.push('/checkout');
        }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleDropdown })(CartDropdown)
);
