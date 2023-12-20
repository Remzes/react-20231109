export const selectUserModule = state => state.user

export const selectUserById = (state, id) => 
    selectUserModule(state).entities[id]