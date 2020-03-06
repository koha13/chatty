import io from "socket.io-client";
import store from "../redux/store";
import { newMessage } from "../redux/actions";

const setupSocketIo = () => {
  const socket = io("http://localhost:3000", {
    query: "token=" + store.getState().user.token
  });

  socket.on("onlineUser", data => {
    console.log(data);
  });

  socket.on("newMessage", data => {
    store.dispatch(newMessage(data));
  });
};
export default setupSocketIo;
