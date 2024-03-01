import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [
  {
    openSidebar: false,
  },
];

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Export the reducers (actions)
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
