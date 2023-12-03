import React, { useEffect, useState } from 'react'

export default function LifeCycleFunction() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log('Functional Component: Mounting') //component did mount
        return () => {
            console.log('Functional COmponent: Unmounted') //component will unmount
        }
    })

    useEffect(() => { //component will update
        console.log('Functional Component: Updated')
    },[count])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Clicke Me!</button>
    </div>
  )
}
