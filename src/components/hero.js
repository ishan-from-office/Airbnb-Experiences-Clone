import React from "react"
import grid from '../images/photo-grid.png';


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Hero() {
    return (
        <div className="hero">
            <span>
            <img className='grid' src={grid} alt="grid" /> 
            <p className="hero-text-title">Online Experiences</p>
            <p className="hero-text">Join unique interactive activities led by <br />

             one-of-a-kind hosts—all without leaving  <br />

            home.</p>
            </span>
           
        </div>
    );    
}