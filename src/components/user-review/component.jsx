export const UserReview = ({ selectedUser, review }) => {
    const { rating, text } = review

    return (
        <>
            <p>
                <strong>{selectedUser.name}</strong>: <u>{rating}</u>
            </p>
            <p>{text}</p>
        </>
    )
}