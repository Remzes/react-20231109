import { useCallback, useState } from "react"
import { ItemCounter } from "../counter"

const MENUITEM_CONST = {
    min: 0,
    max: 5,
    step: 1
}

export const MenuItem = ({ name, price, ingredients }) => {
    const [amount, setAmount] = useState(0)

    const incrementAmount = useCallback((e) => {
        e.preventDefault()
        if (amount < MENUITEM_CONST.max) setAmount(amount + MENUITEM_CONST.step)
    }, [amount])
    const decrementAmount = useCallback((e) => {
        e.preventDefault()
        if (amount > MENUITEM_CONST.min) setAmount(amount - MENUITEM_CONST.step)
    }, [amount])

    return (
        <>
            <p>
                <strong>{name}</strong> - {price}$
            </p>
            <ItemCounter
                value={amount}
                increment={incrementAmount}
                decrement={decrementAmount}
            />
            <p>{ingredients}</p>
        </>
    )
}