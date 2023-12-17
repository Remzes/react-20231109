import { useSelector } from "react-redux"
import { selectReviewsById } from "../../redux/features/entities/reviews/selector"
import { selectUserById } from "../../redux/features/entities/users/selector"
import { UserReview } from "./component"

export const UserReviewContainer = ({ id }) => {
    const dish = useSelector(state => selectReviewsById(state, id))
    const selectedUser = useSelector(state => selectUserById(state, dish.userId))

    return <UserReview selectedUser={selectedUser} dish={dish} />
}