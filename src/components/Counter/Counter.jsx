import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}
