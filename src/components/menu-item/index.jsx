export const MenuItem = ({ name, price, ingredients }) => {
    return (
        <>
            <p>
                <strong>{name}</strong> - {price}$
            </p>
            <p>{ingredients}</p>
        </>
    )
}