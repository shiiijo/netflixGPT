import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptEnabled: false,
    gptSuggestions: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.isGptEnabled = !state.isGptEnabled;
    },
    addGptSuggestions: (state, action) => {
      state.gptSuggestions = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptSuggestions } = gptSlice.actions;

export default gptSlice.reducer;
