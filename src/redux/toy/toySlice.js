import { createSlice } from "@reduxjs/toolkit";

const toySlice=createSlice({
    name:'toyStore',
    initialState:{
        toys:10
    },
    reducers:{
        buy:(state)=>{

            return {...state,toys:state.toys-1}
        },
        sell:(state)=>{
            return {...state,toys:state.toys+1}
        }
    }
})
export const {buy,sell}=toySlice.actions;
export default toySlice.reducer; 