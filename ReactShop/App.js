import React from 'react';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {Login} from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component{
constructor(){
  super();
}
render(){
  return (<div className="container">
   <Header/>
   <Nav/>
   <Login/>
  </div>);
}
}