import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/homePage/HomePage.components'
import ShopPage from './Pages/Shop/Shop.component'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
