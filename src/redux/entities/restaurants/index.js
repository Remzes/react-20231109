import { normalizedRestaurants } from "../../../../materials/normalized-mock";
import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks";
import { REQUEST_STATUES } from "../../../consts/REQUEST_STATUSES";

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUES.idle,
    },
    extraReducers: builder => {
        builder.addCase(getRestaurants.pending, (state, action) => {
            state.status = REQUEST_STATUES.peding
            state.entities = {}
            state.ids = []
        })
        builder.addCase(getRestaurants.fulfilled, (state, action) => {
            state.status = REQUEST_STATUES.fulfilled
            state.entities = action.payload.reduce((acc, restaurant) => {
                acc[restaurant.id] = restaurant
                return acc;
            }, {})
            state.ids = action.payload.map(i => i.id)
        })
        builder.addCase(getRestaurants.rejected, (state, action) => {
            state.status = REQUEST_STATUES.rejected
            state.entities = {}
            state.ids = []
        })
    }
})