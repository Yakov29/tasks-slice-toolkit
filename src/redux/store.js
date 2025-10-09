import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { tasksReducer } from "./reducer";


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
})