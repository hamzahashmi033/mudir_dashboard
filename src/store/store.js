import { configureStore } from '@reduxjs/toolkit';
import projectReducer from "./ProjectSlice.js"
const store = configureStore({
    reducer: {
        project: projectReducer
    }
})
export default store;