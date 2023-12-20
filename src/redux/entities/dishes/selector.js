import { createSelector } from "@reduxjs/toolkit"
import _ from "lodash"

export const selectDishModule = state => state.dish

export const selectDishById = (state, id) =>
    selectDishModule(state).entities[id]

// --- OLD SOLUTION ---
// export const selectDishesByIds = (state, ids) => {
//     const data = _.filter(
//         _.values(state.dish.entities),
//         record => _.includes(ids, record.id)
//     )
//     return data
// }

// export const selectDishesByRestaurantId = (state, id) => {
//     const restaurant = state.restaurant.entities[id]
//     return selectDishesByIds(state, restaurant.menu)
// }

// --- SOLUTION SAME AS CHAT GPT ONE FOR REVIEWS ---
const selectDishesEntities = state => state.dish.entities

export const makeSelectDishById = () => createSelector(
    [selectDishesEntities, (_, dishId) => dishId],
    (entities, dishId) => entities[dishId]
)

export const makeSelectDishesByRestaurantId = () => {
    const selectDishById = makeSelectDishById()
    return createSelector(
        [state => state, (state, restaurantId) => state.restaurant.entities[restaurantId]],
        (state, restaurant) => restaurant.menu.map(el => selectDishById(state, el))
    )
}

export const selectRestaurantDishesLoadingStatusById = (state, id) =>
    selectDishModule(state).loaded_restaurants[id]