import React from 'react';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {Login} from './components/Login';
import {Shop} from './container/Shop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component{
constructor(){
  super();
  this.state = {isLogin:false,userid:''};
}
isAuth(loginState, uid=''){
  this.setState({isLogin:loginState,userid:uid});
}
render(){
  return (<div className="container">
    {this.state.isLogin?<Shop userid={this.state.userid}/>:<Login updateLoginStatus={this.isAuth.bind(this)}/>}
   
  </div>);
}
}