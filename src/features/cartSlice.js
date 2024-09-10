import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartList:[],
}

export const cartSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
               state.cartList.push(action.payload)
        } 
    }
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer