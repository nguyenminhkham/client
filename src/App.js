import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import RegisterPage from './pages/register';
import CategoryPage from './pages/caregory';
import ProductdetailPage from './pages/productdetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/category' component={CategoryPage} exact />
        <Route path='/productdetail' component={ProductdetailPage} exac/> 
      </Switch>
    </Router>
  );
}

export default App;
