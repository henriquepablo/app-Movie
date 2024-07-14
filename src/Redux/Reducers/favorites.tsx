// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// help if film or serie to go add in the list
let aux:boolean;

interface Content {
    name: string
    path: string
}

export const SelectedFavorites = createSlice({
    name: 'favorites',
    
    initialState: [],
     
    reducers: {
        isFavorited: (state, action) => {
            aux = action.payload   
        },
        // this function add a item in the list
        addInList: {
            // say that my action is the type Content
            reducer: (state, action: PayloadAction<Content>) => {
                if (aux) {
                    state.push({
                        name: action.payload.name,
                        pathImage: action.payload.path,
                    })
                }
                else {
                    state.forEach((film, index) => {
                        if(film.name === action.payload.name) state.splice(index, 1);
                    });
                }
            },
            // return a payload customized
            prepare: (path: string, name: string) => {
                return {payload: {path, name}}
            }
        },
        removeInList: (state, action) => {
            state.forEach((item, index) => {
                if (item.name === action.payload) state.splice(index, 1);
            })
        }
        
    }
});

export const {isFavorited, addInList, removeInList} = SelectedFavorites.actions;

export default SelectedFavorites.reducer;