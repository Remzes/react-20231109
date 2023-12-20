import { createSlice } from "@reduxjs/toolkit";
import { getRestaurantDishesById } from "./thunks";
import { REQUEST_STATUES } from "../../../consts/REQUEST_STATUSES"

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: {},
        ids: [],
        loaded_restaurants: {}
    },
    extraReducers: builder => {
        builder.addCase(getRestaurantDishesById.pending, (state, action) => {
            state.status = REQUEST_STATUES.peding
            state.entities = {}
            state.ids = []
        })
        builder.addCase(getRestaurantDishesById.fulfilled, (state, action) => {
            state.status = REQUEST_STATUES.fulfilled
            state.entities = action.payload.data.reduce((acc, dish) => {
                acc[dish.id] = dish
                return acc;
            }, {})
            state.ids = action.payload.data.map(i => i.id)
            state.loaded_restaurants[action.payload.restaurantId] = REQUEST_STATUES.fulfilled
        })
        builder.addCase(getRestaurantDishesById.rejected, (state, action) => {
            state.status = REQUEST_STATUES.rejected
            state.entities = {}
            state.ids = []
        })
    }
})