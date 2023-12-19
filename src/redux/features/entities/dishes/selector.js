export const selectDishModule = state => state.dish

export const selectDishById = (state, id) =>
    selectDishModule(state).entities[id]