import {restaurants} from "../../../materials/mock"
import { RestaurantTabs } from "../../components/restaurant-tabs";
import { useState } from "react";
import { Restaurant } from "../../components/restaurant";

export const RestaurantsPage = () => {
    const items = restaurants.map(i => ({ id: i.id, name: i.name }))
    const [restaurantId, setActiveRestaurantId] = useState()

    const activeRestaurant = restaurants.find(r => r.id === restaurantId)

    return (
        <div>
            <h1>Restaurants Menu & Dishes:</h1>
            <RestaurantTabs
                setActiveRestaurantId={setActiveRestaurantId}
                items={items}
            />
            { restaurantId && <Restaurant restaurant={activeRestaurant} /> }
        </div>
    );
};