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
            state.status = REQUEST_STATUES.peding
            state.entities = {}
            state.ids = []
        })
        builder.addCase(getRestaurantReviewsById.fulfilled, (state, action) => {
            state.status = REQUEST_STATUES.fulfilled
            state.entities = action.payload.data.reduce((acc, dish) => {
                acc[dish.id] = dish
                return acc;
            }, {})
            state.ids = action.payload.data.map(i => i.id)
            state.loaded_restaurants[action.payload.restaurantId] = REQUEST_STATUES.fulfilled
        })
        builder.addCase(getRestaurantReviewsById.rejected, (state, action) => {
            state.status = REQUEST_STATUES.rejected
            state.entities = {}
            state.ids = []
        })
    }
})