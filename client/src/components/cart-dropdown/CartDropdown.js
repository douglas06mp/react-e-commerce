import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleDropdown } from '../../redux/cart/cartAction';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';
import { CartDropdownContainer, Items, Empty } from './CartDropdown.style';

const CartDropdown = ({ cartItems, history, toggleDropdown }) => {
  return (
    <CartDropdownContainer>
      <Items>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <Empty>Your cart is empty</Empty>
        )}
      </Items>
      <Button
        onClick={() => {
          toggleDropdown();
          history.push('/checkout');
        }}
      >
        CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleDropdown })(CartDropdown)
);
