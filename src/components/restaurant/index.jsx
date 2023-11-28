import { Menu } from "../menu";
import { Reviews } from "../reviews";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
            <hr />
        </div>
    );
};