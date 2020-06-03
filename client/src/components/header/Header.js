import React from 'react';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectHidden } from '../../redux/cart/cartSelector';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import CartIcon from '../cart-icon/CartIcon';
import {
  HeaderContainer,
  LogoBox,
  LinkGroup,
  HeaderLink,
} from './Header.style';

const Header = ({ user, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoBox to="/">
        <Logo className="header--logo" />
      </LogoBox>
      <LinkGroup>
        <HeaderLink to="/shop">SHOP</HeaderLink>
        <HeaderLink to="/checkout">CHECKOUT</HeaderLink>
        {user ? (
          <HeaderLink as="div" onClick={signOutStart}>
            LOG OUT
          </HeaderLink>
        ) : (
          <HeaderLink to="/login">LOG IN</HeaderLink>
        )}
        <CartIcon />
      </LinkGroup>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
