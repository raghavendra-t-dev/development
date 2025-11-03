import { useState } from "react"

const Counter=()=>{
    const [count,setCount] = useState()
    console.log(count)
    return(
        <div>
            <p>Counter Component</p>
            <p>{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>Decrement</button>
        </div>
    )
}

export default Counter