
import React, { Component} from 'react'
import logo from './images/logo.png';
//import flag from './images/flag.png';
import { NavLink } from 'react-router-dom'
//import {HiOutlineMoon} from "react-icons/hi";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg text-white bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to="/"><img src={logo} width={50} height={50} alt='' /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active ms-5" aria-current="page"to="/">होम</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/sports">खेल</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/business">व्यापार</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/technology">तकनीकी</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/science">विज्ञान</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/health">स्वास्थ्य</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/">{HiOutlineMoon}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-5" to="/"><img src={flag} width={30} height={20} alt='' /></NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>



      </div>
    )
  }
}
