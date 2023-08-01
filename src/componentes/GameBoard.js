import React from "react";
import CardsElement from "./CardElements";

export default function GameBoard (props) {
    return (
        <div id="gameBoard">
            {props.cards.map( (arr, index) => {
                return (<CardsElement handleFliped={props.handleFliped} key={index} cards={arr}></CardsElement> )
                
            })}
        </div>
    )
} 