import React from 'react'

const ViewReview = ({ selectedUser, review, enableEditMode }) => {
    const { rating, text } = review

    return (
        <div>
            <p>
                <strong>{selectedUser.name}</strong>: <u>{rating}</u>
            </p>
            <p>{text}</p>
            <button onClick={enableEditMode}>Edit Review</button>
        </div>
    )
}

export const MemoizedViewReview = React.memo(ViewReview)