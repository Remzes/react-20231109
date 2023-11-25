import { UserReview } from "../user-review";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({ id, user, rating, text }) => (
                    <li key={id}>
                        <UserReview user={user} rating={rating} text={text} />
                    </li>
                ))}
            </ul>
        </div>
    );
};