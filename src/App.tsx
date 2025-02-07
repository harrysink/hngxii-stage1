import { useState } from 'react'
import blue from './assets/blue box.png'
import brown from './assets/brown box.png'
import green from './assets/green box.png'
import orange from './assets/orange box.png'
import red from './assets/red box.png'
import yellow from './assets/yellow box.png'
import './App.css'

const colours = [blue, brown, green, orange, red, yellow]

const GameBoard = () => {
  const [current, setCurrent] = useState(blue)
  const [score, setScore] = useState(0)
  const [gamestatus, setGamestatus] = useState('')

  const newGame = () => {
    setGamestatus('')
    const random = colours[Math.floor(Math.random() * colours.length)]
    setCurrent(random)
  }

  const guessColour = (colours: string[], index: number) => {
    if (colours[index] == current)  {
      setScore(score + 1)
      setGamestatus('Your guess was right!🤗')
      // alert('Your guess was right!🤗')  
    } else {
      setScore(score)
      setGamestatus('Your guess was wrong😢')
      // alert('Your guess was wrong😢')
    }
  }

  return (
    <div className='game-board-container'>
      <div>
        {/* color box */}
        <div data-testid="colorBox" className='color-box-container'>
          <div className='color-box'>
            <img src={current} alt="" className='img-colour' />
          </div>
        </div>

        {/* new game button */}
        <button data-testid="newGameButton" onClick={newGame}>
          New game
        </button>
      </div>

      {/* game instruction */}
      <p className='game-instruction' data-testid="gameInstructions">Guess the box with the color above!</p>

      {/* game status */}
      <p data-testid="gameStatus">{gamestatus}</p>

      {/* score */}
      <p data-testid="score">Correct guesses: {score}</p>
      
      {/* color option */}
      <div className='game-board'>
        {colours.map((colour, index) => (
          <img
            key={index}
            src={colour} 
            data-testid="colorOption" 
            className='img-colour'
            onClick={() => guessColour(colours, index)}
          />  
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div>
        <GameBoard />
      </div>
    </>
  )
}

export default App
