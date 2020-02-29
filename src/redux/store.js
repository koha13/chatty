import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { user, rooms } from "./reducers";

const rootReducer = combineReducers({
  user,
  rooms
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
