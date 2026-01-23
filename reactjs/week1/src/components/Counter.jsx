import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, increaseCount] = useState(0)

    return (
        <div>
            <h2
                style={{
                    color: count > 10 ? "red" : "black"
                }}
            >{count}</h2>
            <button onClick={() => {
                increaseCount(count+1)
            }
            }>+</button>
            <button onClick={() => {
                if (count > 0) {
                    increaseCount(count-1)
                }
            }
            }>-</button>
            <button onClick={() => increaseCount(0)}>reset</button>
        </div>
    )
}

export default Counter