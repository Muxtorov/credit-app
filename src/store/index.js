import { createStore } from "redux";
import { combineReducers } from "redux";
import cart from "./cart";

const reducers = combineReducers({ cart });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
