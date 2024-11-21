/* eslint-disable no-unused-vars */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    return await res.json();
})

const userslice = createSlice({
    name: 'user',
    initialState:{
        isLoading : false,
        data: null,
        isError : false,
    },
    reducers: {
        removeuser (state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        deleteusers(state, action) {
            return state = []
        },
    },
    extraReducers : (builer) => {
        builer.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });
        builer.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builer.addCase(fetchTodos.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })
    }   
})

export {userslice};
export const {adduser, removeuser, deleteusers} = userslice.actions;
