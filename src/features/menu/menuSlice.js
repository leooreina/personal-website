import { createSlice } from "@reduxjs/toolkit";

export const menu = createSlice({
  name: "menu",
  initialState: {
    value: [
      { id: 1, label: "About", selected: false },
      { id: 2, label: "Home", selected: true },
      { id: 3, label: "Work", selected: false },
    ],
  },
  reducers: {
    changeMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMenu } = menu.actions;

export default menu.reducer;
