import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

const Store = configureStore({
    reducer: {
        contact : UserReducer
    }
});
export default Store