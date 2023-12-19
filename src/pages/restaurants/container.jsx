import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/features/entities/restaurants/selector";
import { RestaurantPage } from "./component";

export const RestaurantsPageContainer = () => {
    const [restaurantId, setActiveRestaurantId] = useState(-1)
    const activeRestaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    return (
        <RestaurantPage
            restaurantId={restaurantId}
            activeRestaurant={activeRestaurant}
            setActiveRestaurantId={setActiveRestaurantId}
        />
    );
};