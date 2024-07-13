import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: 'Id_Film',
    initialState: {
        value: ''
    },
    reducers: {
        id_film: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {id_film} = idSlice.actions;

export default idSlice.reducer;