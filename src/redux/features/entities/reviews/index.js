import { normalizedReviews } from "../../../../../materials/normalized-mock";
import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: normalizedReviews.reduce((acc, review) => {
            acc[review.id] = review
            return acc;
        }, {}),
        ids: normalizedReviews.map(i => i.id)
    }
})