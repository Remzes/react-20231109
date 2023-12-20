import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantDishesById = createAsyncThunk(
    'restaurant/getRestaurantDishesById',
    async (id, thunkApi) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`)

        const data = await response.json()

        return {
            data,
            restaurantId: id
        }
    }
)