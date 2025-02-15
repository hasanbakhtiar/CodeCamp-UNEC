import React from 'react'
import useCounterHook from './useCounterHook'

const Quantity = () => {
    const {count,increment,decrement,reset} = useCounterHook(100);
  return (
    <div>
        <button onClick={decrement}>-1</button>
        <span>{count}</span>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Quantity