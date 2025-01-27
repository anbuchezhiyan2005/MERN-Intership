import { createSlice } from "@reduxjs/toolkit";

const initialFruitState = {
    fruits : []
}

export  const fruitSlice = createSlice({
    name : 'myFruitSlice',
    initialState:initialFruitState,
    reducers : {
        setFruit : (state, action) => {
            state.fruits = [...state.fruits,action.payload]
        },
        resetFruit : (state) => {
            state.fruits = []
        }
    }
})

export const {setFruit, resetFruit} = fruitSlice.actions
export default fruitSlice.reducer