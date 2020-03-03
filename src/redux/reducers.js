import {
  LOG_IN,
  ADD_ROOM,
  CHANGE_CURRENT_ROOM,
  RESET_MESSAGE,
  GET_MESSAGES,
  ADD_MESSAGE,
  INVALID_LOGIN,
  REQUEST_LOGIN
} from "./actions";

export const user = (
  state = { isFetching: false, isInvalid: false, data: {} },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload, isInvalid: false, isFetching: false };
    case INVALID_LOGIN: {
      return { ...state, isInvalid: true, isFetching: false };
    }
    case REQUEST_LOGIN: {
      return {
        ...state,
        isFetching: true,
        isInvalid: false
      };
    }

    default:
      return state;
  }
};

export const rooms = (state = [], action) => {
  switch (action.type) {
    case ADD_ROOM:
      return action.payload.rooms;
    default:
      return state;
  }
};

export const currentRoom = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ROOM:
      return action.payload.room;
    default:
      return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
    case RESET_MESSAGE:
      return [];
    case GET_MESSAGES:
      return action.payload.messages;
    case ADD_MESSAGE:
      return [action.payload.message, ...state];
    default:
      return state;
  }
};
