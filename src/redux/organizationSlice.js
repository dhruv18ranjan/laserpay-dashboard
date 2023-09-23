import { createSlice } from "@reduxjs/toolkit";


export const organizationSlice=createSlice({
    name:'organizations',
    initialState:{
        organizations:[],
    },
    reducers:{
        setOrganizations(state,action){
            state.organizations=action.payload;
        },
        emptyOrganisations(state){
            state.organizations=[];
        }

    },

})

export const {setOrganizations,emptyOrganisations}=organizationSlice.actions;
export default organizationSlice.reducer;