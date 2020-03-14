import io from "socket.io-client";
import store from "../redux/store";
import { newMessage } from "../redux/actions/messages";
import {
  updateUserStatusInRoom,
  updateReadStatus,
  addNewRoom,
  newUsersToRoom
} from "../redux/actions/rooms";
import { newUser } from "../redux/actions/users";

const setupSocketIo = () => {
  const socket = io("http://localhost:3005", {
    query: "token=" + store.getState().user.token
  });

  socket.on("onlineUser", data => {
    store.dispatch(updateUserStatusInRoom(data.user, "online"));
  });

  socket.on("offlineUser", data => {
    store.dispatch(updateUserStatusInRoom(data.user, "offline"));
  });

  socket.on("newMessage", data => {
    store.dispatch(newMessage(data));
    if (String(data.room) === String(store.getState().currentRoom._id)) {
      socket.emit("updateReadStatus", {
        user: store.getState().user._id,
        room: store.getState().currentRoom._id
      });
    } else {
      store.dispatch(updateReadStatus(data.room, false));
    }
  });

  socket.on("newRoom", data => {
    store.dispatch(addNewRoom(data));
  });
  socket.on("newUserInRoom", data => {
    store.dispatch(newUsersToRoom(data));
  });
  socket.on("newUser", data => {
    store.dispatch(newUser(data));
  });
  socket.on("test", data => {
    console.log(data);
  });
};

export default setupSocketIo;
