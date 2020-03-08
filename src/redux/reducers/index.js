import currentRoom from "./currentRoomReducer";
import messages from "./messagesReducer";
import rooms from "./roomsReducers";
import user from "./userReducer";
import users from "./usersReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  rooms,
  currentRoom,
  messages,
  users
});
