import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';

const App = ({ user, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/shop"
          component={(routeProps) => <Shop {...routeProps} />}
        />
        <Route exact path="/checkout" render={() => <Checkout />} />
        <Route
          exact
          path="/login"
          render={() => (user ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
