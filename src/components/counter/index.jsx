export const Counter = ({ value, increment, decrement}) => {
    return (
        <div>
            <button onClick={decrement}>-</button>
            <b style={{ padding: '0 5px' }}>{value}</b>
            <button onClick={increment}>+</button>
        </div>
    )
}