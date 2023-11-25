export const UserReview = ({ user, rating, text }) => {
    return (
        <>
            <p>
                <strong>{user}</strong>: <u>{rating}</u>
            </p>
            <p>{text}</p>
        </>
    )
}