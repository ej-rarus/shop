import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'lee'
})

let stash = createSlice({
    name : 'stash',
    initialState : [10, 11, 12]
})


export default configureStore({
    reducer: {
        user : user.reducer,
        stash : stash.reducer
    }
})