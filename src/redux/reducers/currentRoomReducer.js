import { CHANGE_CURRENT_ROOM } from "../actions/currentRoom";
import { UPDATE_STATUS_USER_IN_ROOM } from "../actions/rooms";
import _ from "lodash";

const currentRoom = (state = {}, action) => {
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
export default currentRoom;
