import {
  LOG_IN,
  ADD_ROOM,
  CHANGE_CURRENT_ROOM,
  RESET_MESSAGE,
  GET_MESSAGES,
  ADD_MESSAGE,
  INVALID_LOGIN,
  REQUEST_LOGIN,
  UPDATE_STATUS_USER_IN_ROOM
} from "./actions";
import cloneDeep from "lodash/cloneDeep";

export const user = (
  state = { isFetching: false, isInvalid: false, data: {} },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };
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
      return [...action.payload];
    case UPDATE_STATUS_USER_IN_ROOM: {
      let temp = cloneDeep(state);
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].users.length; j++) {
          if (
            String(temp[i].users[j]._id) === String(action.payload.user._id)
          ) {
            temp[i].users[j].status = action.payload.status;
          }
        }
      }
      return temp;
    }
    default:
      return state;
  }
};

export const currentRoom = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ROOM:
      return action.payload.room;
    case UPDATE_STATUS_USER_IN_ROOM: {
      let temp = cloneDeep(state);
      for (let i = 0; i < temp.users.length; i++) {
        if (String(temp.users[i]._id) === String(action.payload.user._id)) {
          temp.users[i].status = action.payload.status;
        }
      }
      return temp;
    }
    default:
      return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
    case RESET_MESSAGE:
      return [];
    case GET_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
};
