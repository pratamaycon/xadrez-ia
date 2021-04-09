import React, { useEffect, useState } from 'react'
import './App.css'
import {gameSubject, initGame} from './Game'
import Board from './Board'

function App() {
    const [board, setBoard] =useState([])
    useEffect (() => {
    initGame()
    const subscribe = gameSubject.subscribe((game ) =>
      setBoard(game.board)
    )
    return () => subscribe.unsubscribe()
    }, [])
  return <div className='container'>
    <div className='board-container'>
      <Board board={board}/>
    </div>
  </div>
}

export default App
