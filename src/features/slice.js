import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserId: 0,
    Username: ""
};

const slice = createSlice({
    name : "BL",
    initialState,
    reducers:{
        UpdateUserId: (state,action) =>{
            state.UserId = action.payload;
        },
        UpdateUsername: (state,action) =>{
            state.Username = action.payload;
        }
    },
});

export const {UpdateUserId, UpdateUsername} = slice.actions;

export default slice.reducer;