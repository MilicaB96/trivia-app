export const selectToggledAnswers = (state) => state.trivia.toggledAnswers;
export const selectCategories = (state) => state.trivia.categories;
export const selectPage = (state) => state.trivia.currentPage;
export const selectLastPage = (state) =>
  state.trivia.clues.length <= state.trivia.currentPage;

export const selectClues = (state) =>
  state.trivia.clues.slice(
    state.trivia.currentPage - 1,
    state.trivia.currentPage
  );
export const selectFilterTrivia = (state) =>
  state.trivia.filter
    ? state.trivia.clues.filter((clue) =>
        clue.question.toLowerCase().includes(state.trivia.filter.toLowerCase())
      )
    : state.trivia.clues;
