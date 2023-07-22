import React from "react"
import star from '../images/star.png';

/*
 
*/ 


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
            <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
        
    )
}