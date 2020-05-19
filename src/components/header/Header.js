import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import CartDropdown from '../cartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import CartIcon from '../cartIcon/CartIcon';
import './Header.scss';

const Header = ({ user: { user } }) => {
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
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
