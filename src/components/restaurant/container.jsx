import { Restaurant } from "./component"
import { useSelector } from "react-redux";
import { selectRestaurantReviewsLoadingStatusById } from "../../redux/entities/reviews/selector";
import { selectRestaurantDishesLoadingStatusById } from "../../redux/entities/dishes/selector";
import { getRestaurantDishesById } from "../../redux/entities/dishes/thunks";
import { getRestaurantReviewsById } from "../../redux/entities/reviews/thunk";


export const RestaurantContainer = ({ restaurant, ...props }) => {
    // REDUX THUNK
    // const menuStatus = useSelector(state => selectRestaurantDishesLoadingStatusById(state, restaurant.id))
    // const reviewsStatus = useSelector(state => selectRestaurantReviewsLoadingStatusById(state, restaurant.id))

    const dishesInfo = getRestaurantDishesById(restaurant.id)
    const reviewsInfo = getRestaurantReviewsById(restaurant.id)

    const menuStatus = !dishesInfo.isLoading && !dishesInfo.isFetching
    const reviewsStatus = !reviewsInfo.isLoading && !reviewsInfo.isFetching

    return <Restaurant
        {...props}
        restaurant={restaurant}
        menuStatus={menuStatus}
        reviewsStatus={reviewsStatus}
    />
}