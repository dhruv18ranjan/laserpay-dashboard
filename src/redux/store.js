import { configureStore } from "@reduxjs/toolkit";
import  organizationSlice  from "./organizationSlice";
import  userSlice  from "./userSlice";
import eventSlice from "./eventSlice";

export const store = configureStore({
    reducer:{
        organizations:organizationSlice,    
        user:userSlice,    
        events:eventSlice
    }
})  