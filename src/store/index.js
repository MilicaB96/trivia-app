import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import chuckReducers from "./chuck/slice";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { chuck: chuckReducers },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
