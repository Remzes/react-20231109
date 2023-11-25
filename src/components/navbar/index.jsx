import { NavbarItem } from "./navbar-item.jsx";
export const Navbar = ({ items }) => {
    return (
        <div>
            {items.map(({ name, id }) => (
                <NavbarItem title={name} key={id} />
            ))}
        </div>
    );
};