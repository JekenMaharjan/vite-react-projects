import React, { useEffect, useState } from 'react'
import './clock.css'

const Clock = () => {

    const [time, setTime] = useState(
        new Date().toLocaleTimeString('en-US', {hour12: true})
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString('en-US', {hour12: true})
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

  return (
    <div className='clockContainer'>
        <h1>Clock</h1>
        <h2>{time}</h2>
    </div>
  )
}

export default Clock