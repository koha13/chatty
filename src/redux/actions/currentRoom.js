import { updateReadStatus } from "./rooms";
import { getMessages, deleteMessage } from "./messages";

export const CHANGE_CURRENT_ROOM = "CHANGE_CURRENT_ROOM";

// Change current room
export const changeCurrentRoom = room => {
  return dispatch => {
    dispatch(deleteMessage());
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
