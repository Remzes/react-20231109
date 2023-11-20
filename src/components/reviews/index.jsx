export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({ id, user, rating, text }) => (
                    <li key={id}>
                        <p>
                            <strong>{user}</strong>: <u>{rating}</u>
                        </p>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};