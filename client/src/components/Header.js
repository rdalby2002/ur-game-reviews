import React from "react";
import Logo from '../assets/images/urglogo.png'

function Header() {
 return (
    <header>
        <div className="center">
        <img alt="Logo" src={Logo}></img>
        </div>
    </header>
 )
}
export default Header;