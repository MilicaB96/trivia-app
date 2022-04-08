import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getRandomJoke: () => {},
  getNewJoke: () => {},
};
export const chuckSlice = createSlice({
  name: "chuck",
  initialState: {
    joke: [],
  },
  reducers: {
    setJoke: (state, action) => {
      state.joke = action.payload;
    },
    ...middlewareActions,
  },
});

export const { setJoke, getRandomJoke, getNewJoke } = chuckSlice.actions;
export default chuckSlice.reducer;
