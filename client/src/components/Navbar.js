import React from "react";
// import icons
// import { useState } from "react";
// import { Auth } from '../utils/Auth';
import Nav from 'react-bootstrap/Nav';

function Navbar() {

  return (
    <Nav className="navinfo">
      <a href="/toprated">Top Rated</a>
      <a href="/newreleases">New Releases</a>
      <a href="/favorites">Favorites</a>
      <a href="/logout">Logout</a>
    </Nav>
  );
}

export default Navbar;