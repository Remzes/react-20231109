import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dishes";
import { reviewSlice } from "./entities/reviews";
import { userSlice } from "./entities/users";
import { restaurantApiSlice } from "./entities/restaurants/restaurantApiSlice";
import { userApiSlice } from "./entities/users/userApiSlice";
import { dishApiSlice } from "./entities/dishes/dishApiSlice";
import { reviewApiSlice } from "./entities/reviews/reviewApiSlice";

const store = configureStore({
    reducer: {
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [restaurantApiSlice.reducerPath]: restaurantApiSlice.reducer,
        [dishApiSlice.reducerPath]: dishApiSlice.reducer,
        [reviewApiSlice.reducerPath]: reviewApiSlice.reducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares()
        .concat([
            dishApiSlice.middleware,
            restaurantApiSlice.middleware,
            reviewApiSlice.middleware,
            userApiSlice.middleware
        ])
})

export default store;