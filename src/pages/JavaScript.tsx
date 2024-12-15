import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function JavaScriptPage() {
  const [gameState, setGameState] = useState({
    number: Math.floor(Math.random() * 100) + 1,
    guesses: [],
    message: 'Guess a number between 1 and 100!',
  })

  const [guess, setGuess] = useState('')

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault()
    const guessNumber = parseInt(guess)
    if (isNaN(guessNumber)) {
      setGameState(prev => ({ ...prev, message: 'Please enter a valid number!' }))
      return
    }
    const newGuesses = [...gameState.guesses, guessNumber]
    if (guessNumber === gameState.number) {
      setGameState({
        number: Math.floor(Math.random() * 100) + 1,
        guesses: [],
        message: `Congratulations! You guessed the number in ${newGuesses.length} tries!`,
      })
    } else if (guessNumber < gameState.number) {
      setGameState(prev => ({ ...prev, guesses: newGuesses, message: 'Too low! Try again.' }))
    } else {
      setGameState(prev => ({ ...prev, guesses: newGuesses, message: 'Too high! Try again.' }))
    }
    setGuess('')
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">JavaScript Magic ✨</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is JavaScript?</h2>
          <p className="mb-4">JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.</p>
          
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Coder');  // Outputs: Hello, Coder!`}
            </pre>
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Awesome JS Tricks! 🧙‍♂️</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use alert() for important messages!</li>
            <li>DHTML is the future of web interactivity!</li>
            <li>Create cool mouse trail effects!</li>
            <li>Make your site visitor's cursor a custom image!</li>
          </ul>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">JavaScript Number Guessing Game</h2>
          <p className="mb-4">Try out this simple JavaScript game! Guess a number between 1 and 100.</p>
          
          <form onSubmit={handleGuess} className="space-y-4">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full p-2 bg-black text-white border-2 border-[#00FFFF]"
              placeholder="Enter your guess"
            />
            <button type="submit" className="bg-[#FFD700] text-black px-4 py-2 hover:bg-yellow-400 transition-colors">
              Guess!
            </button>
          </form>
          
          <p className="mt-4 text-[#00FFFF]">{gameState.message}</p>
          
          <div className="mt-4">
            <h3 className="text-[#FFD700]">Your Guesses:</h3>
            <p className="text-white">{gameState.guesses.join(', ')}</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="https://www.codedex.io/javascript" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            View More JavaScript Content on Codedex.io
          </Link>
        </div>
      </div>
    </Layout>
  )
}

