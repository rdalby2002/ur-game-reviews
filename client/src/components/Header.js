import React from "react";
import Logo from '../assets/images/urglogo1.png'

function Header() {
 return (
    <header className="center">
        <div className="header">
        <img alt="Logo" src={Logo}></img>
        </div>
    </header>
 )
}
export default Header;