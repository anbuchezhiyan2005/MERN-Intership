import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cart : []
}

export const cartSlice = createSlice ({
    name : 'myCartSlice',
    initialState : initialCartState,
    reducers : {
        addToCart : (state, action) => {
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer

