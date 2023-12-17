export const UserReview = ({ selectedUser, dish }) => {
    const { rating, text } = dish

    return (
        <>
            <p>
                <strong>{selectedUser.name}</strong>: <u>{rating}</u>
            </p>
            <p>{text}</p>
        </>
    )
}