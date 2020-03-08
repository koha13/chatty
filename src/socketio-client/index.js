import io from "socket.io-client";
import store from "../redux/store";
import { newMessage } from "../redux/actions/messages";
import {
  updateUserStatusInRoom,
  updateReadStatus
} from "../redux/actions/rooms";

const setupSocketIo = () => {
  const socket = io("http://localhost:3000", {
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
    console.log(data);
  });
};
export default setupSocketIo;
