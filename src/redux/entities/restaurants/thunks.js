import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
    'restaurant/getRestaurants',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3001/api/restaurants')
            const data = await response.json()
            return data
        } catch (err) {
            thunkAPI.rejectWithValue(err.message)
        }
    },
    {
        condition: (_, { getState }) => {
            const { restaurant: { entities } } = getState()
            return Object.values(entities).length === 0
        }
    }
)