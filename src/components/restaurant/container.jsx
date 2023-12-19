import { Restaurant } from "./component"
import { useSelector } from "react-redux";
import {
    selectRestaurantMenuById,
    selectRestaurantReviewsById
} from "../../redux/features/entities/restaurants/selector";

export const RestaurantContainer = ({ restaurant, ...props }) => {
    const restaurantMenu = useSelector(state => selectRestaurantMenuById(state, restaurant.id))
    const restaurantReviews = useSelector(state => selectRestaurantReviewsById(state, restaurant.id))

    return <Restaurant
        {...props}
        restaurant={restaurant}
        restaurantMenu={restaurantMenu}
        restaurantReviews={restaurantReviews}
    />
}