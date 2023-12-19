export const selectReviewsModule = state => state.review

export const selectReviewsById = (state, id) =>
    selectReviewsModule(state).entities[id]