import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';
import './Checkout.scss';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout--header">
        <h3 className="checkout--title">Product</h3>
        <h3 className="checkout--title">Name</h3>
        <h3 className="checkout--title">Quantity</h3>
        <h3 className="checkout--title">Price</h3>
        <h3 className="checkout--title">Remove</h3>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="checkout--total">Total: ${total}</div>
      <div className="checkout--test">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
