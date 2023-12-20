import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants";
import { dishSlice } from "./entities/dishes";
import { reviewSlice } from "./entities/reviews";
import { userSlice } from "./entities/users";

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares()
})

export default store;