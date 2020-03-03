import auth from "../axios/auth";

export const LOG_IN = "LOG_IN";
export const ADD_ROOM = "ADD_ROOM";
export const CHANGE_CURRENT_ROOM = "CHANGE_CURRENT_ROOM";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const INVALID_LOGIN = "INVALID_LOGIN";

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
        dispatch({ type: INVALID_LOGIN });
      });
  };
};

export const addRooms = rooms => {
  return {
    type: ADD_ROOM,
    payload: {
      rooms: rooms
    }
  };
};

export const changeCurrentRoom = room => {
  return {
    type: CHANGE_CURRENT_ROOM,
    payload: {
      room
    }
  };
};

export const resetMessages = () => {
  return {
    type: RESET_MESSAGE
  };
};

export const getMessages = messages => {
  return {
    type: GET_MESSAGES,
    payload: {
      messages
    }
  };
};

export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: {
      message
    }
  };
};
