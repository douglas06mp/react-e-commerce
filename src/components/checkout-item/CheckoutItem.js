import React from 'react';
import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cartAction';
import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="checkout-item--img-box">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item--info">{name}</span>
      <span className="checkout-item--info">{quantity}</span>
      <span className="checkout-item--info">${price}</span>
      <div className="checkout-item--remove" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
