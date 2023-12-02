import {restaurants} from "../../../materials/mock"
import { RestaurantTabs } from "../../components/restaurant-tabs";
import { useState } from "react";
import { Restaurant } from "../../components/restaurant";
import { ReviewForm } from "../../components/review-form";

export const RestaurantsPage = () => {
    const items = restaurants.map(i => ({ id: i.id, name: i.name }))
    const [restaurantId, setActiveRestaurantId] = useState()

    const activeRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId)

    return (
        <div>
            <h1>Restaurants Menu & Dishes:</h1>
            <RestaurantTabs
                setActiveRestaurantId={setActiveRestaurantId}
                items={items}
            />
            { restaurantId && (
                <>
                    <Restaurant restaurant={activeRestaurant} />
                    <ReviewForm />
                </>
            )}
        </div>
    );
};