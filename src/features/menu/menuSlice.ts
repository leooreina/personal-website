import { createSlice } from "@reduxjs/toolkit";
import menuData from "../../sources/menu.json";

export const menu = createSlice({
  name: "menu",
  initialState: {
    value: menuData,
  },
  reducers: {
    changeMenu: (state, action) => {
      state.value[action.payload.currentSelected].selected = true;
      if (
        state.value[action.payload.currentSelected] !==
        state.value[action.payload.previousSelected]
      ) {
        state.value[action.payload.previousSelected].selected = false;
      }
    },
  },
});

export const { changeMenu } = menu.actions;

export const selectMenu = (state: any) => state.menu.value;

export default menu.reducer;
