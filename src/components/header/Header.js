import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectHidden } from '../../redux/cart/cartSelector';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';

const Header = ({ user, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="header--logo-box">
        <Logo className="header--logo" />
      </Link>
      <div className="header--links">
        <Link to="/shop" className="header--link">
          SHOP
        </Link>
        <Link to="/contact" className="header--link">
          CONTACT
        </Link>
        {user ? (
          <div className="header--link" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login" className="header--link">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
