import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './redux/user/userAction';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import './App.css';

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { user } = this.props.user;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/shop" render={() => <Shop />} />
          <Route
            exact
            path="/login"
            render={() => (user ? <Redirect to="/" /> : <Login />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
