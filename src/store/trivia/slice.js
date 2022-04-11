import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getTrivia: () => {},
  getCategories: () => {},
  getClues: () => {},
  filter: () => {},
};
export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    toggledAnswers: [],
    categories: [],
    clues: [],
    currentPage: 1,
    filter: "",
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
    setCurrentPage: (state, action) => {
      if (action.payload === "prev") {
        state.currentPage--;
      }
      if (action.payload === "next") {
        state.currentPage++;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
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
  setCurrentPage,
  setFilter,
} = triviaSlice.actions;
export default triviaSlice.reducer;
