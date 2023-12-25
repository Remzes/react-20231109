import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dishes/selector"
import { MenuItem } from "./component"
import { useGetDishesByRestaurantIdQuery } from "../../redux/entities/dishes/dishApiSlice"

const MENUITEM_CONST = {
    min: 0,
    max: 5,
    step: 1
}

export const MenuItemContainer = ({ id, restaurantId }) => {
    const [amount, setAmount] = useState(0)

    // REDUX THUNK
    // const dish = useSelector(state => selectDishById(state, id))

    const { dish } = useGetDishesByRestaurantIdQuery({ restaurantId }, {
        selectFromResult: ({ data }) => ({ dish: data?.find(d => d.id === id) })
    })

    const incrementAmount = useCallback((e) => {
        e.preventDefault()
        if (amount < MENUITEM_CONST.max) setAmount(amount + MENUITEM_CONST.step)
    }, [amount])
    const decrementAmount = useCallback((e) => {
        e.preventDefault()
        if (amount > MENUITEM_CONST.min) setAmount(amount - MENUITEM_CONST.step)
    }, [amount])

    return (
        <MenuItem dish={dish} amount={amount} incrementAmount={incrementAmount} decrementAmount={decrementAmount} />
    )
}