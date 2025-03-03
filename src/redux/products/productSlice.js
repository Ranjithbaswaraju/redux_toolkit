import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




export const fetchDataPromise=createAsyncThunk("fakeStore",async()=>{
    const final=await axios.get('https://fakestoreapi.com/products')
    return final.data
})
const productSlice=createSlice({
    name:'products/fakeStore',
    initialState:{
        data:[],
    error:null,
    loading:true,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDataPromise.fulfilled,(state,action)=>{
            return {...state,data:action.payload,loading:false}
        })
        .addCase(fetchDataPromise.rejected,(state)=>{
            return {...state,error:'something went wrong',loading:false}
        })
        .addCase(fetchDataPromise.pending,(state)=>{
            return {...state,loading:true}
        })
    }
})
export default productSlice.reducer