import { MenuItemContainer } from "../menu-item/container";

export const Menu = ({ dishes }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ol>
                {dishes.map(item => {
                    return (
                        <li key={item.id}>
                            <MenuItemContainer id={item.id} />
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};