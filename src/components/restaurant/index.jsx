import { Menu } from "../menu";
import { Reviews } from "../reviews";

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <hr />
        </div>
    );
};