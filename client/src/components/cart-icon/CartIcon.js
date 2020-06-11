import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cartSelector';
import { toggleDropdown } from '../../redux/cart/cartAction';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { CartIconContainer, Count } from './CartIcon.style';

export const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
    <CartIconContainer id="CartIcon" onClick={toggleDropdown}>
      <Bag />
      <Count id="Count">{itemCount}</Count>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
