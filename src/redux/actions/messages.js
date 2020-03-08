import messageApi from "../../axios/message";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const SENDING_MESSAGE = "SENDING_MESSAGE";

// Fetch messages in current room from api and add to store.messages
export const getMessages = () => {
  return (dispatch, getState) => {
    dispatch(sendingMessage());
    messageApi
      .get("/" + getState().currentRoom._id, {
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      })
      .then(res => {
        dispatch({ type: GET_MESSAGES, payload: res.data });
      });
  };
};

// Sending message action
const sendingMessage = () => {
  return {
    type: SENDING_MESSAGE
  };
};

// Post new messages to api and add to store.messages
export const sendMessage = contentMessage => {
  return (dispatch, getState) => {
    messageApi
      .post(
        "/" + getState().currentRoom._id,
        {
          content: contentMessage
        },
        {
          headers: {
            Authorization: "Bearer " + getState().user.token
          }
        }
      )
      .then(res => {
        dispatch(newMessage(res.data));
      });
  };
};

// Receive new messages from socketio and add to store.messages
export const newMessage = message => {
  return (dispatch, getState) => {
    if (String(getState().currentRoom._id) === String(message.room)) {
      dispatch({ type: ADD_MESSAGE, payload: message });
    }
  };
};
