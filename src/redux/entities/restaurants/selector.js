export const selectRestaurantModule = (state) => state.restaurant

export const selectRestaurants = (state) => selectRestaurantModule(state).entities

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids

export const selectRestaurantById = (state, restaurantId) => 
    selectRestaurantModule(state)?.entities[restaurantId]

export const selectRestaurantMenuById = (state, restaurantId) => {
    return selectRestaurantById(state, restaurantId)?.menu
}

export const selectRestaurantReviewsById = (state, restaurantId) => 
    selectRestaurantById(state, restaurantId)?.reviews