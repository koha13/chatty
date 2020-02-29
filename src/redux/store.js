import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { user } from "./reducers";

const rootReducer = combineReducers({
  user
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
