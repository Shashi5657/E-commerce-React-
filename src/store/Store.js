import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './SidebarSlice';

const Store = configureStore({
    reducer: {
        sidebar : sidebarReducer
    }
})

export default Store;