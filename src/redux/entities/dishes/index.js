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
            state.status = REQUEST_STATUES.pending
        })
        builder.addCase(getRestaurantDishesById.fulfilled, (state, action) => {
            state.status = REQUEST_STATUES.fulfilled
            const new_entities = action.payload.data.reduce((acc, dish) => {
                acc[dish.id] = dish
                return acc;
            }, {})
            state.entities = {
                ...state.entities,
                ...new_entities
            }
            state.ids = [
                ...state.ids,
                ...action.payload.data.map(i => i.id)
            ]
            state.loaded_restaurants[action.payload.restaurantId] = REQUEST_STATUES.fulfilled
        })
        builder.addCase(getRestaurantDishesById.rejected, (state, action) => {
            state.status = REQUEST_STATUES.rejected
        })
    }
})