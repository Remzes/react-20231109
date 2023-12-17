import { useCallback, useState } from "react"
import { Counter } from "../counter"
import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/features/entities/dishes/selector"

const MENUITEM_CONST = {
    min: 0,
    max: 5,
    step: 1
}

export const MenuItem = ({ id }) => {
    const [amount, setAmount] = useState(0)

    const { name, price, ingredients } = useSelector(state => selectDishById(state, id))

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
            <Counter
                value={amount}
                increment={incrementAmount}
                decrement={decrementAmount}
            />
            <p>{typeof ingredients === 'object' ? ingredients.join(', ') : ingredients}</p>
        </>
    )
}