import React, { useEffect, useState } from 'react'
import './Clock.css'

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
        <h1 className='bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent text-4xl font-bold'>Clock</h1>
        <h2 className='text-white text-4xl'>{time}</h2>
    </div>
  )
}

export default Clock