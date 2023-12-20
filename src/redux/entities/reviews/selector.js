import { createSelector } from "@reduxjs/toolkit"
import _ from "lodash"

export const selectReviewsModule = state => state.review

export const selectReviewsById = (state, id) =>
    selectReviewsModule(state).entities[id]

/// --- OLD VERSION ---
// export const selectReviewsByIds = createSelector(
//     [
//         // state => state.review.entities,
//         (_, ids) => ids
//     ],
//     (...rest) => {
//         console.log('What is here?', rest)
//         return _.filter(
//             _.values(entities),
//             record => _.includes(ids, record.id)
//         )
//     }
// )


// --- РЕШЕНИЕ ИЗ CHAT GPT ---
// The first selector gets the review entities.
const selectReviewEntities = state => state.review.entities;

// The second selector is a factory function that creates selectors.
// It takes a review ID and returns a selector.
// The selector uses the review ID to find and return the corresponding review.
export const makeSelectReviewById = () => {
  return createSelector(
    [selectReviewEntities, (_, reviewId) => reviewId],
    (reviews, reviewId) => reviews[reviewId]
  )
};

// The third selector is also a factory function.
// It takes a restaurant ID and returns a selector.
// The selector uses the restaurant ID to find the corresponding restaurant and its reviews.
export const makeSelectReviewsByRestaurantId = () => {
  const selectReviewById = makeSelectReviewById();
  return createSelector(
    [state => state, (state, restaurantId) => state.restaurant.entities[restaurantId]],
    (state, restaurant) => {
        return restaurant.reviews.map(reviewId => selectReviewById(state, reviewId))
    }
  )
};

export const selectRestaurantReviewsLoadingStatusById = (state, id) =>
    selectReviewsModule(state).loaded_restaurants[id]