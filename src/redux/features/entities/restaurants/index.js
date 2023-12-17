import { normalizedRestaurants } from "../../../../../materials/normalized-mock";
import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant
            return acc;
        }, {}),
        ids: normalizedRestaurants.map(i => i.id),
    }
})