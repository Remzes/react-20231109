import { UserReview } from "../user-review";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(id => (
                    <li key={id}>
                        <UserReview id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};