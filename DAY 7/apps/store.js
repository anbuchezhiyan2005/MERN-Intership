import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../slices/userSlices'
import fruitReducer from '../slices/fruitSlices'
import vegetableReducer from '../slices/vegetableSlices'
import dryFruitReducer from '../slices/dryfruitSlices'
import cartReducer from '../slices/cartSlices'

const store = configureStore({
    reducer : {
        userInfo : userReducer,
        fruitsInfo : fruitReducer,
        vegetablesInfo : vegetableReducer,
        dryFruitsInfo : dryFruitReducer,
        cartInfo : cartReducer

    }
})

export default store