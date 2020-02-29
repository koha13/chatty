import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { user, rooms, currentRoom, messages } from "./reducers";

const rootReducer = combineReducers({
  user,
  rooms,
  currentRoom,
  messages
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
