export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu:</h3>
            <ol>
                {menu.map(({ id, name, price, ingredients }) => (
                    <li key={id}>
                        <p>
                            <strong>{name}</strong> - {price}$
                        </p>
                        <p>{ingredients}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};