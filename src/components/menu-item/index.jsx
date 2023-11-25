import { MenuItemCounter } from "../counter"

export const MenuItem = ({ name, price, ingredients }) => {
    return (
        <>
            <p>
                <strong>{name}</strong> - {price}$
            </p>
            <MenuItemCounter />
            <p>{ingredients}</p>
        </>
    )
}