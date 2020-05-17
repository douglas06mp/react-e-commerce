import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/shop" render={() => <Shop />} />
      </Switch>
    </div>
  );
}

export default App;
