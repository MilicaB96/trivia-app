export const selectToggledAnswers = (state) => state.trivia.toggledAnswers;
export const selectAllClues = (state) => state.trivia.clues;
export const selectCategories = (state) => state.trivia.categories;
export const selectPage = (state) => state.trivia.currentPage;
export const selectLastPage = (state) =>
  state.trivia.clues.length <= state.trivia.currentPage;

export const selectClues = (state) =>
  state.trivia.clues.slice(
    state.trivia.currentPage - 1,
    state.trivia.currentPage
  );
export const selectFilter = (state) => state.trivia.filter;
