import { createSlice } from "@reduxjs/toolkit";
import { StaticRouter } from "react-router-dom";

const middlewareActions = {
  getTrivia: () => {},
  getCategories: () => {},
  getClues: () => {},
};
export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    toggledAnswers: [],
    categories: [],
    clues: [],
  },
  reducers: {
    setTrivia: (state, action) => {
      state.trivia = action.payload;
    },
    setToggledAnswers: (state, action) => {
      state.toggledAnswers.push(action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setClues: (state, action) => {
      state.clues = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  // getTrivia,
  // setTrivia,
  setToggledAnswers,
  getCategories,
  setCategories,
  getClues,
  setClues,
} = triviaSlice.actions;
export default triviaSlice.reducer;
