import { updateReadStatus } from "./rooms";
import { getMessages } from "./messages";

export const CHANGE_CURRENT_ROOM = "CHANGE_CURRENT_ROOM";

// Change current room
export const changeCurrentRoom = room => {
  return dispatch => {
    dispatch({
      type: CHANGE_CURRENT_ROOM,
      payload: {
        room
      }
    });
    dispatch(updateReadStatus(room._id, true));
    dispatch(getMessages());
  };
};
