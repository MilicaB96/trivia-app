import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getTrivia: () => {},
};
export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    trivia: [],
    toggledAnswers: [],
  },
  reducers: {
    setTrivia: (state, action) => {
      state.trivia = action.payload;
    },
    setToggledAnswers: (state, action) => {
      state.toggledAnswers.push(action.payload);
    },
    ...middlewareActions,
  },
});

export const { getTrivia, setTrivia, setToggledAnswers } = triviaSlice.actions;
export default triviaSlice.reducer;
