import { useSelector } from "react-redux"
import { selectReviewsById } from "../../redux/features/entities/reviews/selector"
import { selectUserById } from "../../redux/features/entities/users/selector"

export const UserReview = ({ id }) => {
    const { userId, rating, text } = useSelector(state => selectReviewsById(state, id))
    const selectedUser = useSelector(state => selectUserById(state, userId))

    return (
        <>
            <p>
                <strong>{selectedUser.name}</strong>: <u>{rating}</u>
            </p>
            <p>{text}</p>
        </>
    )
}