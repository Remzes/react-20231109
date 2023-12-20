import { createSlice } from "@reduxjs/toolkit";
import { getRestaurantReviewsById } from "./thunk"
import { REQUEST_STATUES } from "../../../consts/REQUEST_STATUSES"

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: {},
        ids: [],
        loaded_restaurants: {}
    },
    extraReducers: builder => {
        builder.addCase(getRestaurantReviewsById.pending, (state, action) => {
            state.status = REQUEST_STATUES.pending
        })
        builder.addCase(getRestaurantReviewsById.fulfilled, (state, action) => {
            state.status = REQUEST_STATUES.fulfilled
            const new_entites = action.payload.data.reduce((acc, review) => {
                acc[review.id] = review
                return acc;
            }, {})
            state.entities = {
                ...state.entities,
                ...new_entites
            }
            state.ids = [
                ...state.ids,
                ...action.payload.data.map(i => i.id)
            ]
            state.loaded_restaurants[action.payload.restaurantId] = REQUEST_STATUES.fulfilled
        })
        builder.addCase(getRestaurantReviewsById.rejected, (state, action) => {
            state.status = REQUEST_STATUES.rejected
        })
    }
})