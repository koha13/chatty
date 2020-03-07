import auth from "../axios/auth";
import roomApi from "../axios/room";
import messageApi from "../axios/message";
import userApi from "../axios/user";

export const LOG_IN = "LOG_IN";
export const ADD_ROOM = "ADD_ROOM";
export const CHANGE_CURRENT_ROOM = "CHANGE_CURRENT_ROOM";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const INVALID_LOGIN = "INVALID_LOGIN";
export const UPDATE_STATUS_USER_IN_ROOM = "UPDATE_STATUS_USER_IN_ROOM";
export const UPDATE_READ_STATUS = "UPDATE_READ_STATUS";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: REQUEST_LOGIN });
    auth
      .post("/login", {
        email: email,
        password: password
      })
      .then(res => {
        dispatch({
          type: LOG_IN,
          payload: { ...res.data.user, token: res.data.token }
        });
      })
      .catch(err => {
        if (err.response) {
          dispatch({ type: INVALID_LOGIN });
        }
      });
  };
};

// Fetch all users from api
export const getUsers = () => {
  return (dispatch, getState) => {
    userApi
      .get("/", {
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      })
      .then(res => {
        dispatch({ type: GET_ALL_USERS, payload: res.data });
      });
  };
};

// Fetch rooms from api and add to store.rooms
export const addRooms = () => {
  return async (dispatch, getState) => {
    try {
      let res = await roomApi.get("/", {
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      });
      dispatch({ type: ADD_ROOM, payload: res.data });
    } catch (error) {
      //
    }
  };
};

// Update read status room in store.rooms
export const updateReadStatus = (room_id, status) => {
  return {
    type: UPDATE_READ_STATUS,
    payload: {
      room_id,
      status
    }
  };
};

// Update online status of user in room
export const updateUserStatusInRoom = (user, status) => {
  return {
    type: UPDATE_STATUS_USER_IN_ROOM,
    payload: {
      user,
      status
    }
  };
};

// Change current room
export const changeCurrentRoom = room => {
  return {
    type: CHANGE_CURRENT_ROOM,
    payload: {
      room
    }
  };
};

// Delete all messages in store.messages
export const resetMessages = () => {
  return {
    type: RESET_MESSAGE
  };
};

// Fetch messages in current room from api and add to store.messages
export const getMessages = () => {
  return (dispatch, getState) => {
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

// Post new messages to api and add to store.messages
export const addMessage = contentMessage => {
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
        dispatch({ type: ADD_MESSAGE, payload: res.data });
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
