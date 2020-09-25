import React from 'react'

export default function Results({score,playAgain}) {
   
    return (
      
            <div className="score-board"> 
    <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> 
        
    )
}
