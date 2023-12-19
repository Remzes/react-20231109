import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/entities/restaurants";
import { dishSlice } from "./features/entities/dishes";
import { reviewSlice } from "./features/entities/reviews";
import { userSlice } from "./features/entities/users";

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;