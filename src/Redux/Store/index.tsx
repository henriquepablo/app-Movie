import { configureStore } from "@reduxjs/toolkit";
import idFilme from "../Reducers/idFilme";

export default configureStore({
    reducer: {
        Id_Film: idFilme
    }
});