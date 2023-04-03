import React from "react";
// import icons
// import { useState } from "react";
// import { Auth } from '../utils/Auth';
import Nav from 'react-bootstrap/Nav';
import Square from '../assets/images/square.png'
import Triangle from '../assets/images/triangle.png'
import Circle from '../assets/images/circle.png'
import X from '../assets/images/x.png'
function Navbar() {

  return (
    <Nav className="navinfo">
      <a href="/toprated">
        <img className="pslogos" alt="square" src={Square}></img>
        Top Rated</a>
      <a href="/newreleases">
      <img className="pslogos" alt="triangle" src={Triangle}></img>
        New Releases</a>
      <a href="/favorites">
      <img className="pslogos" alt="circle" src={Circle}></img>
        Favorites</a>
      <a href="/logout">
      <img className="pslogos" alt="x" src={X}></img>
        Logout</a>
    </Nav>
  );
}

export default Navbar;