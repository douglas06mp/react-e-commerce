import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.util';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/shop" render={() => <Shop />} />
          <Route exact path="/login" render={() => <Login />} />
        </Switch>
      </div>
    );
  }
}

export default App;
