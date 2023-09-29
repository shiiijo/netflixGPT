import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptEnabled: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.isGptEnabled = !state.isGptEnabled;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
