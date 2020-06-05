import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import axios from 'axios';
import { publishKey } from '../../stripe';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, user, history }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    if (!user) {
      alert('Please Login');
      history.push('/login');
      return;
    }

    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((err) => {
        console.log(`Payment error: ${err}`);
        alert('Payment error');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React App"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      locale="en"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(StripeCheckoutButton));
