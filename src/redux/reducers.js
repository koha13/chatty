import {
  LOG_IN,
  ADD_ROOM,
  CHANGE_CURRENT_ROOM,
  RESET_MESSAGE,
  GET_MESSAGES,
  ADD_MESSAGE,
  INVALID_LOGIN,
  REQUEST_LOGIN,
  UPDATE_STATUS_USER_IN_ROOM,
  UPDATE_READ_STATUS,
  GET_ALL_USERS
} from "./actions";
import _ from "lodash";

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
      let temp = _.cloneDeep(state);
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
    case UPDATE_READ_STATUS: {
      let temp = _.cloneDeep(state);
      for (let i = 0; i < temp.length; i++) {
        if (String(temp[i]._id) === String(action.payload.room_id)) {
          temp[i].read = action.payload.status;
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
      if (_.isEmpty(state)) return state;
      let temp = _.cloneDeep(state);
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

export const users = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};
