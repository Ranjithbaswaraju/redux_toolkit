import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            return {...state,cart:[...state.cart,action.payload]}
        },
        removeAllFromCart:()=>{
            return {...state,cart:[]}
        },
        removeSingle:(state,action)=>{
            const targetId=action.payload
            const filteredData=state.cart.filter(each=>each.id!=targetId)
            return{...state,cart:filteredData}
        }
    }
})

export const {addToCart,removeAllFromCart} =cartSlice.actions
export default cartSlice.reducer