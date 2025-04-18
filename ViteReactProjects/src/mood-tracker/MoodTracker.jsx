import React, { useState } from 'react'
import './MoodTracker.css'

const MoodTracker = () => {

    const [mood, setMood] = useState('🤔')

    const happy = () => {
        setMood('😁')
    }
    
    const sad = () => {
        setMood('😔')
    }

    const cry = () => {
        setMood('😭')
    }

  return (
    <div className='moodContainer'>
        <h1>Mood Tracker</h1>
        <h2>Mood : {mood}</h2>
        <div className='moodButtons'>
            <button onClick={happy}>Happy</button>
            <button onClick={sad}>Sad</button>
            <button onClick={cry}>Cry</button>
        </div>
    </div>
  )
}

export default MoodTracker