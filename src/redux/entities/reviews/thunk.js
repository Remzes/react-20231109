import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantReviewsById = createAsyncThunk(
    'restaurant/getRestaurantReviewsById',
    async (id, thunkApi) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`)

        const data = await response.json()

        return {
            data,
            restaurantId: id
        }
    }
)