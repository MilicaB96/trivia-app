import { call, put, takeLatest } from "redux-saga/effects";
import TriviaService from "../../services/TriviaService";
import { setTrivia, getTrivia } from "./slice";

function* getTriviaHandler() {
  try {
    const data = yield call(TriviaService.getRandomTrivia);
    yield put(setTrivia(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetTrivia() {
  yield takeLatest(getTrivia.type, getTriviaHandler);
}
