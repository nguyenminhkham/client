import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import RegisterPage from './pages/register';
import CategoryPage from './pages/caregory';
import ProductdetailPage from './pages/productdetail';
import CartPage from './pages/cart';
import Verifyemail from './pages/verifyemail';
import ActivationEmail from './pages/activationEmail';
import DownloadsPage from './pages/downloads';

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
        <Route path='/verifyemail' component={Verifyemail}/>
        <Route path='/user/activate/:activation_token' component={ActivationEmail}/>
        <Route path='/downloads' component={DownloadsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
