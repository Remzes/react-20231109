import { useSelector } from "react-redux"
import { Reviews } from "./component"
import { makeSelectReviewsByRestaurantId } from "../../redux/entities/reviews/selector"

export const ReviewsContainer = ({ restaurantId }) => {
    const selectReviewsByRestaurantId = makeSelectReviewsByRestaurantId()
    const reviews = useSelector(state => selectReviewsByRestaurantId(state, restaurantId))

    return <Reviews reviews={reviews} />
}