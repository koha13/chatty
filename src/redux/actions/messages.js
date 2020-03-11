import messageApi from "../../axios/message";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const SENDING_MESSAGE = "SENDING_MESSAGE";
export const FETCHING_MESSAGE = "FETCHING_MESSAGE";
export const FETCH_MORE_MSG = "FETCH_MORE_MSG";
export const ADD_MORE_MSG = "ADD_MORE_MSG";
export const NO_MORE_MSG = "NO_MORE_MSG";
export const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";

// Fetch messages in current room from api and add to store.messages
export const getMessages = () => {
  return (dispatch, getState) => {
    dispatch(fetchingMessage());
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

// DeleteAllMessage
export const deleteMessage = () => {
  return {
    type: DELETE_ALL_MESSAGES
  };
};

export const moreMessages = () => {
  return (dispatch, getState) => {
    dispatch(moreMsg());
    messageApi
      .get("/" + getState().currentRoom._id, {
        params: {
          skip: getState().messages.data.length
        },
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      })
      .then(res => {
        if (res.data.length > 0)
          dispatch({ type: ADD_MORE_MSG, payload: res.data });
        else {
          dispatch(noMoreMsg());
        }
      });
  };
};

// Sending message action
const sendingMessage = () => {
  return {
    type: SENDING_MESSAGE
  };
};

// Fetching message action
const fetchingMessage = () => {
  return {
    type: FETCHING_MESSAGE
  };
};

// More msg
const moreMsg = () => {
  return {
    type: FETCH_MORE_MSG
  };
};

// No more msg
const noMoreMsg = () => {
  return {
    type: NO_MORE_MSG
  };
};

// Post new messages to api and add to store.messages
export const sendMessage = message => {
  return (dispatch, getState) => {
    dispatch(sendingMessage());
    messageApi
      .post(
        "/" + getState().currentRoom._id,
        {
          type: message.type,
          content: message.content
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
