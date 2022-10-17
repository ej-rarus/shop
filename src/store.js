import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'lee'
})

let stash = createSlice({
    name : 'stash',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name :'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ] 
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stash : stash.reducer,
        cart : cart.reducer
    }
})