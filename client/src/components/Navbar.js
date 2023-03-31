import React from "react";
// import icons
// import { useState } from "react";
// import { Auth } from '../utils/Auth';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="/toprated">⇠Top Rated</Nav.Link>
      <Nav.Link eventKey="/newreleases">⇡New Releases</Nav.Link>
      <Nav.Link eventKey="/favorites">⇢Favorites</Nav.Link>
      <Nav.Link eventKey="/logout">⇣Logout</Nav.Link>
    </Nav>
  );
}

export default Navbar;