import React from 'react'
import { MemoizedUserReview } from "./component"
import { useGetReviewsByRestaurantIdQuery } from "../../redux/entities/reviews/reviewApiSlice"
import { useGetUsersQuery } from "../../redux/entities/users/userApiSlice"
// REDUX THUNK
// import { useSelector } from "react-redux"
// import { selectReviewsById } from "../../redux/entities/reviews/selector"
// import { selectUserById } from "../../redux/entities/users/selector"

export const UserReviewContainer = ({ restaurantId, id }) => {
    // REDUX THUNK
    // const review = useSelector(state => selectReviewsById(state, id))
    // const selectedUser = useSelector(state => selectUserById(state, review.userId))
    const { review } = useGetReviewsByRestaurantIdQuery({ restaurantId }, {
        selectFromResult: ({ data }) => ({ review: data?.find(i => i.id === id) ?? {} })
    })
    const { user } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({ user: data.find(u => u.id === review.userId) ?? {} })
    })

    return <MemoizedUserReview selectedUser={user} review={review} />
}

export const MemoizedUserReviewContainer = React.memo(UserReviewContainer)