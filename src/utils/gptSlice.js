import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptEnabled: false,
    gptSuggestions: null,
    movieKeywords: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.isGptEnabled = !state.isGptEnabled;
    },
    addGptSuggestions: (state, action) => {
      state.gptSuggestions = action.payload.suggestions;
      state.movieKeywords = action.payload.movieKeywords
    },
  },
});

export const { toggleGptSearch, addGptSuggestions } = gptSlice.actions;

export default gptSlice.reducer;
