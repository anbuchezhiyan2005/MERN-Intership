import { createSlice } from "@reduxjs/toolkit";
import { resetVegetable } from "./vegetableSlices";

const initialDryFruitState = {
    dryFruits : []
}

export  const dryfruitSlice = createSlice({
    name : 'myDryFruitSlice',
    initialState : initialDryFruitState,
    reducers : {
        setDryFruit : (state, action) => {
            state.dryFruits = [...state.dryFruits,action.payload]
        },

        resetDryFruit : (state) => {
            state.dryFruits = []
        },
        getDryFruit : (state) => {
            return state
        }
    }
})

export const {setDryFruit, resetDryFruit, getDryFruit} = dryfruitSlice.actions
export default dryfruitSlice.reducer