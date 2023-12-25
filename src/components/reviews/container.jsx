import { useGetRestaurantsQuery } from '../../redux/entities/restaurants/restaurantApiSlice'
import { useGetReviewsByRestaurantIdQuery } from "../../redux/entities/reviews/reviewApiSlice"
import { MemoizedReviews } from "./component"
// REDUX THUNK
// import { makeSelectReviewsByRestaurantId } from "../../redux/entities/reviews/selector"
// import { useSelector } from "react-redux"

export const ReviewsContainer = ({ restaurantId }) => {
    // REDUX THUNK
    // const selectReviewsByRestaurantId = makeSelectReviewsByRestaurantId()
    // const reviews = useSelector(state => selectReviewsByRestaurantId(state, restaurantId))

    const { restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({ data }) => {
            return { restaurant: data?.find(i => i.id === restaurantId) ?? {} }
        }
    })
    const { data, isLoading, isFetching, isError } = useGetReviewsByRestaurantIdQuery({ restaurantId })

    if (isLoading || isFetching) { return 'Loading...' }
    if (isError) { return 'Error' }

    return <MemoizedReviews restaurantId={restaurantId} reviews={data} />
}