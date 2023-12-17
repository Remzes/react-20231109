import { normalizedUsers } from "../../../../../materials/normalized-mock";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user
            return acc;
        }, {}),
        ids: normalizedUsers.map(i => i.id)
    }
})