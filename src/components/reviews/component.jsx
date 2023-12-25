import _ from 'lodash'
import React from 'react'
import { MemoizedUserReviewContainer } from "../user-review/container";

const Reviews = ({ restaurantId, reviews }) => {

    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({id}) => (
                    <li key={id}>
                        <MemoizedUserReviewContainer restaurantId={restaurantId} id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const MemoizedReviews = React.memo(
    Reviews,
    (prevProps, nextProps) => {
        return prevProps.restaurantId === nextProps.restaurantId &&
        _.isEqual(prevProps.reviews, nextProps.reviews)
    }
)