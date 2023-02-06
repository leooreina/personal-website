import { createSlice } from "@reduxjs/toolkit";
import menuData from "../../sources/menu.json";

export const menu = createSlice({
  name: "menu",
  initialState: {
    value: menuData,
  },
  reducers: {
    changeSectionSelected: (state, action) => {
      const { currentSectionIndex, previousSectionIndex } = action.payload;
      const { value } = state;

      value[currentSectionIndex].selected = true;

      if (value[currentSectionIndex] !== value[previousSectionIndex]) {
        value[previousSectionIndex].selected = false;
      }
    },
  },
});

export const { changeSectionSelected } = menu.actions;

export const selectMenu = (state: any) => state.menu.value;

export default menu.reducer;
