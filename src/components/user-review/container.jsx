import React, { useCallback, useState } from 'react'
import { MemoizedViewReview } from "./ViewReview"
import { useGetReviewsByRestaurantIdQuery } from "../../redux/entities/reviews/reviewApiSlice"
import { useGetUsersQuery } from "../../redux/entities/users/userApiSlice"
import { MemoizedEditReview } from './EditReview'
// REDUX THUNK
// import { useSelector } from "react-redux"
// import { selectReviewsById } from "../../redux/entities/reviews/selector"
// import { selectUserById } from "../../redux/entities/users/selector"

export const UserReviewContainer = ({ restaurantId, id }) => {
    // REDUX THUNK
    // const review = useSelector(state => selectReviewsById(state, id))
    // const selectedUser = useSelector(state => selectUserById(state, review.userId))

    const [isEditModeEnabled, setEditMode] = useState(false)
    const enableEditMode = useCallback((e) => {
        e && e.preventDefault()
        setEditMode(true)
    }, [])
    const cancelEditMode = useCallback((e) => {
        e && e.preventDefault()
        setEditMode(false)
    }, [])

    const { review } = useGetReviewsByRestaurantIdQuery({ restaurantId }, {
        selectFromResult: ({ data }) => ({ review: data?.find(i => i.id === id) ?? {} })
    })

    const { user } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({ user: data.find(u => u.id === review.userId) ?? {} })
    })

    if (isEditModeEnabled) {
        return <MemoizedEditReview restaurantId={restaurantId} selectedUser={user} review={review} cancelEditMode={cancelEditMode} />
    }
    return <MemoizedViewReview selectedUser={user} review={review} enableEditMode={enableEditMode} />
}

export const MemoizedUserReviewContainer = React.memo(UserReviewContainer)