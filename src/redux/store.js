import { configureStore } from "@reduxjs/toolkit";
import toyReducer from "./toy/toySlice"
import cartReducer from "./cart/cartSlice"
import productReducer from "./products/productSlice"

export const reduxStore=configureStore({
    reducer:{
        toyData:toyReducer,
        cartData:cartReducer,
        productData:productReducer,

    }
})