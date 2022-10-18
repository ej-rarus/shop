import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addQty(state, action) {
            let num = state.findIndex((a) => { return a.id === action.payload })
            state[num].count += 1
        },
        decQty(state, action) {
            let num = state.findIndex((a) => { return a.id === action.payload })
            state[num].count -= 1
        },
        addCart(state, action) {
            return { cart: [...state, ...action.payload] }
        }

    }
})

export let { addQty, decQty, addCart } = cart.actions;

export default cart;