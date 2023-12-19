import { Counter } from "../counter"

export const MenuItem = ({ dish, amount, incrementAmount, decrementAmount }) => {
    const { name, price, ingredients } = dish

    return (
        <>
            <p>
                <strong>{name}</strong> - {price}$
            </p>
            <Counter
                value={amount}
                increment={incrementAmount}
                decrement={decrementAmount}
            />
            <p>{typeof ingredients === 'object' ? ingredients.join(', ') : ingredients}</p>
        </>
    )
}