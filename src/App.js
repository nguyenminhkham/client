import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import RegisterPage from './pages/register';
import CategoryPage from './pages/caregory';
import ProductdetailPage from './pages/productdetail';
import CartPage from './pages/cart';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/category' component={CategoryPage} exact />
        <Route path='/product/:id?' component={ProductdetailPage}/> 
        <Route path='/cart/:id?' component={CartPage}/>
      </Switch>
    </Router>
  );
}

export default App;
