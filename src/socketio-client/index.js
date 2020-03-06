import io from "socket.io-client";
import store from "../redux/store";
import { newMessage, updateUserStatusInRoom } from "../redux/actions";

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
  });
};
export default setupSocketIo;
