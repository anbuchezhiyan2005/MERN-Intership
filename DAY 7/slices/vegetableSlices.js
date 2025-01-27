import { createSlice } from "@reduxjs/toolkit";

const initialVegetableState = {
    vegetables : []
}

export  const vegetableSlice = createSlice({
    name : 'myVegetableSlice',
    initialState : initialVegetableState,
    reducers : {
        setVegetable : (state, action) => {
            state.vegetables = [...state.vegetables,action.payload]
        },
        resetVegetable : (state) => {
            state.vegetables = []
        },
        getVegetable : (state) => {
            return state
        }
    }
})

export const {setVegetable, resetVegetable, getVegetable} = vegetableSlice.actions
export default vegetableSlice.reducer