import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        auth: authReducer,
    }
});

export default store