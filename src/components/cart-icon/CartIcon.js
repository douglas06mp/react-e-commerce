import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cartSelector';
import { toggleDropdown } from '../../redux/cart/cartAction';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <Bag className="cart-icon--svg" />
      <span className="cart-icon--count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
