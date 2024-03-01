import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

// Create Initial State
const initialState: any = [];

// Create the slice with Reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      Cookies.set("authToken", action.payload.accessToken);
      Cookies.set("userData", JSON.stringify(action.payload.data));

      return {
        ...state,
      };
    },
    signUp: (state, action) => {
      console.log(action.payload.accessToken);
      Cookies.set("userData", JSON.stringify(action.payload.data));

      return {
        ...state,
      };
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

// Export the reducers (actions)
export const { signIn, signUp, logout } = authSlice.actions;
export default authSlice.reducer;
