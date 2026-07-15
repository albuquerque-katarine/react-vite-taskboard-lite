import { createSlice } from "@reduxjs/toolkit"
import type { Task } from "../types/Task"

type TaskState = {
    value: Task[]
}

const initialState: TaskState = {
    value: []
}

export const TaskSlice= createSlice({
    name: 'task',
    initialState,
    reducers: {
        add: (state, action) => {
           const {id, title, description, status} = action.payload;
           state.value.push({id, title, description, status});
        },
        remove: (state) => {
            state.value = [];
        }
    }
});

export const { add, remove } = TaskSlice.actions;
export default TaskSlice.reducer;