import {
  ADD_ROOM,
  UPDATE_STATUS_USER_IN_ROOM,
  UPDATE_READ_STATUS,
  ADD_NEW_ROOM
} from "../actions/rooms";
import _ from "lodash";

const rooms = (state = [], action) => {
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
    case ADD_NEW_ROOM: {
      let temp = _.cloneDeep(state);
      temp.unshift(action.payload);
      return temp;
    }
    default:
      return state;
  }
};

export default rooms;
