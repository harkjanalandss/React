import React, { useState } from 'react'

function Counter() {
    // useing usestate
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
  return (
    <>
    <h5>Counter:{count}</h5>
    <div className='btn'>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  
    </>
  )
}

export default Counter