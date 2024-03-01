import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sidebarSlice from "./slices/sidebarSlice";

//create a store and give it reducers
export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
  },
});
