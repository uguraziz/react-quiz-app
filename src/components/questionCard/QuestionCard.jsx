import React, {useEffect, useState} from 'react'
import './questionCard.css'

const QuestionCard = ({questionsData, score, setScore, count, setCount, modal, setModal}) => {
    const [timer, setTimer] = useState(15)

    const approwedChoice = (e) => {
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        if(checkAnswer){
            setScore(score + 10)
        }
        setCount(count + 1)
        if(count  == 9){
            setModal(true)
        }
        setTimer(15)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(timer > 0){
                setTimer(timer - 1)
            }
            if(timer == 0 && count < 10) {
                setCount(count + 1)
                setTimer(15)
            }else if (count >= 10){
                setModal(true)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timer])

    

  return (
    <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>
        <div className='questionCard-title'>{count + 1}/10 - {questionsData[count]?.question}</div>
        {
           questionsData[count]?.answers?.map((answer,i) => (
                <button onClick={approwedChoice} key={i} value={answer}>{answer}</button>
           ))
        }
    </div>
  )
}

export default QuestionCard