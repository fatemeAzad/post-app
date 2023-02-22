
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getCommentsById } from './../services/service';
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    comments:[]
}

export const fetchComments=(createAsyncThunk("comments/fetch",async()=>{
    const response=await getComments();
    const data= response.data;
    return data
   
}))


const commentsSlice=createSlice(
    {
        name:"comments",
        initialState,
        extraReducers:{
            [fetchComments.fulfilled]:(state,action)=>{
                state.comments=action.payload
            }
        }
    }
)
export default commentsSlice.reducer