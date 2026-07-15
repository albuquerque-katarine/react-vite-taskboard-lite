import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./Story";

export const Store = configureStore({
    reducer: {
        'task': TaskSlice
    }
});

export type RootState = ReturnType<typeof Store.getState>