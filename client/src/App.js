import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';
import Header from './components/header/Header';
import { GlobleStyle } from './styles/globalStyle';
import Spinner from './components/spinner/Spinner';

const Home = lazy(() => import('./pages/home/Home'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Login = lazy(() => import('./pages/login/Login'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ user, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobleStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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
