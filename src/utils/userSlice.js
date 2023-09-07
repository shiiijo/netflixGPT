import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // it equivalent to setting state = action.payload
      return action.payload;
    },
    removeUser: (state, action) => {
      // it equivalent to setting state = null
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
