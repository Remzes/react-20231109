import { MenuItem } from "../menu-item";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ol>
                {menu.map(({ id, name, price, ingredients }) => (
                    <li key={id}>
                        <MenuItem name={name} price={price} ingredients={ingredients} />
                    </li>
                ))}
            </ol>
        </div>
    );
};