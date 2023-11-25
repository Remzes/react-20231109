import {restaurants} from "../../../materials/mock"
import { Restaurants } from "../../components/restaurants/index.jsx";
import { Navbar } from "../../components/navbar/index.jsx";

export const RestaurantsPage = () => {
    const items = Array.from(
        new Set(restaurants.map(({ name, id }) => ({ name, id })))
    );

    return (
        <div>
            <h1>Restaurants Menu & Dishes:</h1>
            <Navbar items={items} />
            <Restaurants restaurants={restaurants} />
        </div>
    );
};