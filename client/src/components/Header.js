import React from "react";
import Logo from '../assets/images/urglogo.png'

function Header() {
 return (
    <header className="center">
        <img alt="Logo" src={Logo}></img>
    </header>
 )
}
export default Header;