import { configureStore } from "@reduxjs/toolkit";
import idFilme from "../Reducers/idFilme";
import SelectedFavorites from "../Reducers/favorites";

export default configureStore({
    reducer: {
        Id_Film: idFilme,
        SelectedFavorites: SelectedFavorites
    }
});