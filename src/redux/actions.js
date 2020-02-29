export const LOG_IN = "LOG_IN";
export const ADD_ROOM = "ADD_ROOM";

export const login = user => {
  return {
    type: LOG_IN,
    payload: {
      ...user
    }
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
