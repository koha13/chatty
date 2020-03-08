export const CHANGE_CURRENT_ROOM = "CHANGE_CURRENT_ROOM";

// Change current room
export const changeCurrentRoom = room => {
  return {
    type: CHANGE_CURRENT_ROOM,
    payload: {
      room
    }
  };
};
