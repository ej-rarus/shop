import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'


let stash = createSlice({
    name : 'stash',
    initialState : [10, 11, 12]
})



export default configureStore({
    reducer: {
        user : user.reducer,
        stash : stash.reducer,
        cart : cart.reducer
    }
})