import _ from "lodash"
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
    },
    {
        condition: (id, { getState }) => {
            const { restaurant, dish } = getState()

            const selectedRestaurant = restaurant.entities[id]
            const loadedRestaurantDishes = _.values(dish.entities).filter(el => selectedRestaurant.menu.includes(el.id)).map(el => el.id)

            return !_.isEqual(_.sortBy(selectedRestaurant.menu), _.sortBy(loadedRestaurantDishes))
        }
    }
)