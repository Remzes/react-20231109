import { MenuItem } from "../menu-item";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ol>
                {menu.map(id => (
                    <li key={id}>
                        <MenuItem id={id} />
                    </li>
                ))}
            </ol>
        </div>
    );
};