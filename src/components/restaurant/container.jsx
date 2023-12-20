import { Restaurant } from "./component"
import { useSelector } from "react-redux";
import { selectRestaurantReviewsLoadingStatusById } from "../../redux/entities/reviews/selector";
import { selectRestaurantDishesLoadingStatusById } from "../../redux/entities/dishes/selector";


export const RestaurantContainer = ({ restaurant, ...props }) => {
    const menuStatus = useSelector(state => selectRestaurantDishesLoadingStatusById(state, restaurant.id))
    const reviewsStatus = useSelector(state => selectRestaurantReviewsLoadingStatusById(state, restaurant.id))

    console.log("Menu Status", menuStatus, "Review Status", reviewsStatus)

    return <Restaurant
        {...props}
        restaurant={restaurant}
        menuStatus={menuStatus}
        reviewsStatus={reviewsStatus}
    />
}