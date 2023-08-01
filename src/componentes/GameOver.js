import React from "react";
 
export default function GameOver (props) {
    return (props.gameStart ? <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.handleClick}>Jogue novamente</button>
    </div> : <></>)
} 