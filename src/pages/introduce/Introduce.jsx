import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import './introduce.css'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"]
  const [difficultyChange, setDifficultyChange] = useState('')
  const navigate = useNavigate()
  const TOTAL_QUESTIONS = 10

  const startQuiz = () => {
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img className='introduce-img' src='https://myrockford.guide/wp-content/uploads/2022/11/Trivia-logo-01.png' alt='' />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>
          Start the quiz
        </div>
      </div>
    </div>
  )
}

export default Introduce