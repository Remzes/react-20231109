import { ItemCounter } from "../counter"

export const MenuItem = ({ name, price, ingredients }) => {
    return (
        <>
            <p>
                <strong>{name}</strong> - {price}$
            </p>
            <ItemCounter />
            <p>{ingredients}</p>
        </>
    )
}