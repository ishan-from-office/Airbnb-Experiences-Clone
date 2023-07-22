import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import Card from "./components/card.js";
import data from "./data.js";


export default function App() {
   const card = data.map(item => {
    return(
        <Card 
        item ={item}
        />
    )
   })
    return (
        <div>
            <Navbar />
            <Hero   />
            <section className="cards-list">
                {card}
            </section>
        </div>
    )
    
}