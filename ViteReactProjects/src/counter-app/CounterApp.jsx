import React, { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
    
    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        setCount(count-1)
    }

  return (
    <div className='counterContainer'>
        <h1>Counter App</h1>
        <h2>Count : {count}</h2>
        <div className='counterButtons'>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>-</button>    
        </div>
    </div>
  )
}

export default CounterApp