import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {Home} from './containers/Home';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ShoppingMain } from './containers/ShoppingMain';

class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
   
    return (
      <ShoppingMain />
    );
  }
}

export default App;
