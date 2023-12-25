import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dishApiSlice = createApi({
    reducerPath: 'dishApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getDishesByRestaurantId: builder.query({
            query: ({ restaurantId }) => {
                return {
                    url: '/dishes',
                    params: { restaurantId }
                }
            },
            provideTags: (result, err, { restaurantId }) => result.map(dish => ({ type: 'Dish', id: dish.id }))
        })
    })
})

export const {
    useGetDishesByRestaurantIdQuery,
    useLazyGetDishesByRestaurantIdQuery
} = dishApiSlice