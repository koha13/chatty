import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { user, rooms, currentRoom, messages, users } from "./reducers";

const rootReducer = combineReducers({
  user,
  rooms,
  currentRoom,
  messages,
  users
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
