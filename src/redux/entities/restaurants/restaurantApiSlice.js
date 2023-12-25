import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const restaurantApiSlice = createApi({
    reducerPath: 'restaurantTwoApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => '/restaurants',
            provideTags: result => {
                return result.map((restaurant) => ({ type: 'Restaurant', id: restaurant.id }))
            }
        })
    })
})

export const { useGetRestaurantsQuery } = restaurantApiSlice