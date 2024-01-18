import React from 'react'
import './dropdown.css'

const Dropdown = ({data, setDifficultyChange}) => {
  return (
    <div className='dropdown'>
        <select onChange={e => setDifficultyChange(e.target.value)}>
          <option></option>
            {
                data.map((dt, i) => (
                    <option key={i} value={dt}>{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown