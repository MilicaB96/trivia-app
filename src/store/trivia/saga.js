import { call, put, takeLatest } from "redux-saga/effects";
import TriviaService from "../../services/TriviaService";
import {
  setTrivia,
  getTrivia,
  setCategories,
  getCategories,
  getCategory,
  setClues,
  getClues,
} from "./slice";

// function* getTriviaHandler() {
//   try {
//     const data = yield call(TriviaService.getRandomTrivia);
//     yield put(setTrivia(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
function* getCategoriesHandler() {
  try {
    const data = yield call(TriviaService.getCategorites);
    yield put(setCategories(data));
  } catch (error) {
    console.log(error);
  }
}
function* getCluesHandler(action) {
  try {
    const data = yield call(TriviaService.getClues, action.payload);
    yield put(setClues(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetTrivia() {
  // yield takeLatest(getTrivia.type, getTriviaHandler);
  yield takeLatest(getClues.type, getCluesHandler);
  yield takeLatest(getCategories.type, getCategoriesHandler);
}
