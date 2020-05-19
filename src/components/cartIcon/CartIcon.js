import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from '../../redux/cart/cartAction';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <Bag className="cart-icon--svg" />
      <span className="cart-icon--count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
