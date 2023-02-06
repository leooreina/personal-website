import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "page",
  initialState: {
    value: {
      currentSectionId: null,
      previousSectionId: null,
      contentPages: null,
    },
  },
  reducers: {
    callSlideAnimation: (state, action) => {
      const { currentSectionId, previousSectionId } = action.payload;

      // add a switch
      // switch (currentSectionId) {
      //   case 1:
      //     if (previousSectionId === 2) {
      //     }
      //     break;

      //   default:
      //     break;
      // }
    },
    saveContentRefs: (state, action) => {
      const { value } = state;
      const { current } = action.payload;
      value.contentPages = current;
    },
  },
});

export const { callSlideAnimation, saveContentRefs } = page.actions;

export const selectPages = (state: any) => state.page.value;

export default page.reducer;
