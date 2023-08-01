import React from "react";

export default function CardsElement (props) {
    return (
        <div onClick={() => { props.handleFliped(props.cards) }} id={props.cards.id} className={`card ${ props.cards.flipped ? 'flip' : ''}`}>
            <div className="card_front">
                <img className="icon" src={`/assets/images/${props.cards.icon}.png`} alt={props.cards.icon}></img>
            </div>
            <div className="card_back">
                <div>{"</>"}</div>
            </div>
        </div>
    )
}