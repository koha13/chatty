import { LOG_IN, ADD_ROOM } from "./actions";

export const user = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };

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
