import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
