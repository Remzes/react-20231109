import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selector";
import { RestaurantPage } from "./component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurants/thunks";

export const RestaurantsPageContainer = () => {
    const [restaurantId, setActiveRestaurantId] = useState(-1)
    const activeRestaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <RestaurantPage
            restaurantId={restaurantId}
            activeRestaurant={activeRestaurant}
            setActiveRestaurantId={setActiveRestaurantId}
        />
    );
};