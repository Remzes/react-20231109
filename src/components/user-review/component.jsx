import React from 'react'

const UserReview = ({ selectedUser, review, ...rest }) => {
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

export const MemoizedUserReview = React.memo(UserReview)