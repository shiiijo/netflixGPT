import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    upComing: null,
    popular: null,
    topRated: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComing = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addUpcomingMovies,
  addPopularMovies,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
