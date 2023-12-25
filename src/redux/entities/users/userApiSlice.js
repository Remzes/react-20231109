import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
    reducerPath: 'userApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            provideTags: (result, err) => result.map(user => ({ type: 'User', id: user.id }))
        })
    })
})

export const { useGetUsersQuery } = userApiSlice