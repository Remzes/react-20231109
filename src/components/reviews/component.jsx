import { UserReviewContainer } from "../user-review/container";

export const Reviews = ({ reviews }) => {
    console.log('What is reviews in compoennt?', reviews)
    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({id}) => (
                    <li key={id}>
                        <UserReviewContainer id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};