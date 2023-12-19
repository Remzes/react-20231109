import { useSelector } from "react-redux"
import { selectReviewsById } from "../../redux/features/entities/reviews/selector"
import { selectUserById } from "../../redux/features/entities/users/selector"
import { UserReview } from "./component"

export const UserReviewContainer = ({ id }) => {
    const review = useSelector(state => selectReviewsById(state, id))
    const selectedUser = useSelector(state => selectUserById(state, review.userId))

    return <UserReview selectedUser={selectedUser} review={review} />
}