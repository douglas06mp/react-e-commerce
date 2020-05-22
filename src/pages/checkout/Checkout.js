import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';
import {
  CheckoutContainer,
  Header,
  Title,
  Total,
  Test,
} from './Checkout.style';

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutContainer>
      <Header>
        <Title>Product</Title>
        <Title>Name</Title>
        <Title>Quantity</Title>
        <Title>Price</Title>
        <Title>Remove</Title>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <Total>Total: ${total}</Total>
      <Test>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </Test>
      <StripeCheckoutButton price={total} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
