import { call, put, takeLatest } from "redux-saga/effects";
import ChuckService from "../../services/ChuckService";
import { getRandomJoke, setJoke, getNewJoke } from "./slice";
function* getRandomJokeHandler() {
  try {
    const data = yield call(ChuckService.getRandomJoke);
    yield put(setJoke(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchRandomJoke() {
  yield takeLatest(getRandomJoke.type, getRandomJokeHandler);
}

function* getNewJokeHandler(action) {
  try {
    const data = yield call(ChuckService.getJoke, action.payload);
    yield put(setJoke(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchNewJoke() {
  yield takeLatest(getNewJoke.type, getNewJokeHandler);
}
