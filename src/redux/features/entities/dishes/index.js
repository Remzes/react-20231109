import { normalizedDishes } from "../../../../../materials/normalized-mock";
import { createSlice } from "@reduxjs/toolkit";

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: normalizedDishes.reduce((acc, dish) => {
            acc[dish.id] = dish
            return acc;
        }, {}),
        ids: normalizedDishes.map(i => i.id)
    }
})