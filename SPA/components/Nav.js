import React from 'react';
import {NavLink} from 'react-router-dom';
export const Nav = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a classNameName="navbar-brand" href="#">
    <img src="https://www.svgimages.com/svg-image/s7/amazon-logo-256x256.png" width="30" height="30" className="d-inline-block align-top" alt="No logo found"/>
    Shopping
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink className="nav-link" activeClassName="active" to="/">Items <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us.</NavLink>
      </li>
      </ul>
        </div>
</nav>
    )
}