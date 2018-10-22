import React from 'react';
import {NavLink} from 'react-router-dom';

export class Nav extends React.Component{
  constructor(props){
    super(props);
   
  }
render(){
  var jsx = (<div></div>);
  if(!this.props.loginStatus){
    jsx = (<NavLink to="/login" className="nav-item nav-link" href="#">Login</NavLink>);
}
else if(this.props.loginStatus && this.props.userType=='B'){
    jsx = (<NavLink to="/products" className="nav-item nav-link" href="#">Products</NavLink>);
}
if(this.props.loginStatus && this.props.userType=='S'){
    jsx = (<NavLink to="/crud" className="nav-item nav-link" href="#">Seller</NavLink>);
}
    return (
        <div className='container-fluid'>
        <div className='row'>
       <div className='col-sm-12'>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"><img src="assets/images/logo.ico" width="30" height="30" className="d-inline-block align-top" alt="No Logo Found"/>Online Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to="/" className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></NavLink>
     {jsx}
      <NavLink to="/register" className="nav-item nav-link" href="#">Register</NavLink>
      <NavLink to="/contactus" className="nav-item nav-link" href="#">Contact Us</NavLink>
    
    </div>
  </div>
</nav>
        </div>
        </div>
        </div>
    );
}
}