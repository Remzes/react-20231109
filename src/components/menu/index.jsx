import { MenuItemContainer } from "../menu-item/container";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ol>
                {menu.map(id => (
                    <li key={id}>
                        <MenuItemContainer id={id} />
                    </li>
                ))}
            </ol>
        </div>
    );
};