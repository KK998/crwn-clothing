import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/shop" component={ShopPage} /> 
        <Route path="/signin" component={SignInAndSignUp} /> 
      </Switch>
    </div>
  );
}

export default App;
