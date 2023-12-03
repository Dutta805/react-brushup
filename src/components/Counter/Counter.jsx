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


//we can create Actions folder where we will define the actions
//reducers folder to define our reducers //can set the default state there
//selectors folder to map the default state of reducer
//constants folder where we can declare the action types