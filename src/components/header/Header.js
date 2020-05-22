import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
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

const Header = ({ user, hidden }) => {
  return (
    <HeaderContainer>
      <LogoBox to="/">
        <Logo className="header--logo" />
      </LogoBox>
      <LinkGroup>
        <HeaderLink to="/shop">SHOP</HeaderLink>
        <HeaderLink to="/contact">CONTACT</HeaderLink>
        {user ? (
          <HeaderLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </HeaderLink>
        ) : (
          <HeaderLink to="/login">SIGN IN</HeaderLink>
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

export default connect(mapStateToProps)(Header);
