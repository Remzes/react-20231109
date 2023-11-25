import {restaurants} from "../../../materials/mock"
import { Restaurants } from "../../components/restaurants";
import { RestaurantTabs } from "../../components/restaurant-tabs";

export const RestaurantsPage = () => {
    const items = Array.from(
        new Set(restaurants.map(({ name, id }) => ({ name, id })))
    );

    return (
        <div>
            <h1>Restaurants Menu & Dishes:</h1>
            <RestaurantTabs items={items} />
            <Restaurants restaurants={restaurants} />
        </div>
    );
};