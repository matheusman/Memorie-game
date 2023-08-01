import React, { useEffect, useState } from "react"
import GameOver from './componentes/GameOver'
import game from './game/game'
import GameBoard from "./componentes/GameBoard"


function Cards () {

    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect( () => {

        setCards(game.createCardsFromTechs())

    }, [])

    function anotherState () {
        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFliped (card) {
        game.handleFliped(card.id, () => {
            setGameOver(true)
        }, () => {
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }

    return ( <div>
        <GameBoard handleFliped={handleFliped} cards={cards}></GameBoard>
        <GameOver gameStart={gameOver} handleClick={anotherState}></GameOver>
        
    </div>)
}

export default Cards