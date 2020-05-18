import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import './Header.scss';

const Header = ({ user }) => {
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
      </div>
    </div>
  );
};
export default Header;
