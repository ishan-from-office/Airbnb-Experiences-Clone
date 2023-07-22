import React from "react"
import logo from '../images/airbnb-logo.png';


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar() {
    return (
        <nav className='navbar'>
        <img className='logo' src={logo} alt="logo" ></img>
        </nav>
    )
    
}