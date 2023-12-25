import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewApiSlice = createApi({
    reducerPath: 'reviewApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getReviewsByRestaurantId: builder.query({
            query: ({ restaurantId }) => {
                return {
                    url: '/reviews',
                    params: { restaurantId }
                }
            },
            provideTags: (result, err) => result.map(review => ({ type: 'Review', id: review.id }))
        }),
        createReview: builder.mutation({
            query: ({ newReview }) => ({
                url: `/review/${newReview.restaurantId}`,
                method: 'POST',
                headers: {
                    'Conent-Type': 'application/json'
                },
                body: newReview
            }),
            async onQueryStarted({ callback }, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled
                    .catch(() => console.log('error!'))
                dispatch(
                    reviewApiSlice.util.updateQueryData('getReviewsByRestaurantId', { restaurantId: data.restaurantId }, (reviews) => { reviews.push(data) })
                )
                callback()
            },
        })
    })
})

export const {
    useCreateReviewMutation,
    useGetReviewsByRestaurantIdQuery,
    useLazyGetReviewsByRestaurantIdQuery
} = reviewApiSlice