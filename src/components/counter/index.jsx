import { useState } from "react"

export const ItemCounter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <b style={{ padding: '0 5px' }}>{counter}</b>
            <button onClick={() => counter < 5 && setCounter(counter + 1)}>+</button>
        </div>
    )
}