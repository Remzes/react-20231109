import _ from "lodash"
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
    },
    {
        condition: (id, { getState }) => {
            const { restaurant, review } = getState()

            const selectedRestaurant = restaurant.entities[id]
            const loadedRestaurantReviews = _.values(review.entities).filter(el => selectedRestaurant.reviews.includes(el.id)).map(el => el.id)

            return !_.isEqual(_.sortBy(selectedRestaurant.reviews), _.sortBy(loadedRestaurantReviews))
        }
    }
)