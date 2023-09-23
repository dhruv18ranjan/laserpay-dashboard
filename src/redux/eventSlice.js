import { createSlice } from "@reduxjs/toolkit";

export const eventSlice=createSlice({
    name:"events",
    initialState:{
        events:[],
    },
    reducers:{
        setEvents(state,action){
            state.events=action.payload;
        },
        emptyEvents(state){
            state.events=[]
        }

    }
})

export const {setEvents,emptyEvents}=eventSlice.actions;
export default eventSlice.reducer;