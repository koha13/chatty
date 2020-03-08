import {
  ADD_ROOM,
  UPDATE_STATUS_USER_IN_ROOM,
  UPDATE_READ_STATUS,
  ADD_NEW_ROOM,
  FETCHING_ROOM,
  CREATING_ROOM
} from "../actions/rooms";
import _ from "lodash";

const rooms = (state = { status: "done", data: [] }, action) => {
  switch (action.type) {
    case FETCHING_ROOM: {
      return { status: "fetching", data: [] };
    }

    case ADD_ROOM: {
      let temp = _.cloneDeep(state);
      temp.data = action.payload;
      temp.status = "done";
      return temp;
    }

    case CREATING_ROOM: {
      let temp = _.cloneDeep(state);
      temp.status = "creating";
      return temp;
    }

    case UPDATE_STATUS_USER_IN_ROOM: {
      let temp = _.cloneDeep(state);
      for (let i = 0; i < temp.data.length; i++) {
        for (let j = 0; j < temp.data[i].users.length; j++) {
          if (
            String(temp.data[i].users[j]._id) ===
            String(action.payload.user._id)
          ) {
            temp.data[i].users[j].status = action.payload.status;
          }
        }
      }
      return temp;
    }
    case UPDATE_READ_STATUS: {
      let temp = _.cloneDeep(state);
      for (let i = 0; i < temp.data.length; i++) {
        if (String(temp.data[i]._id) === String(action.payload.room_id)) {
          temp.data[i].read = action.payload.status;
        }
      }
      return temp;
    }
    case ADD_NEW_ROOM: {
      let temp = _.cloneDeep(state);
      action.payload.read = false;
      temp.data.unshift(action.payload);
      temp.status = "created";
      return temp;
    }
    default:
      return state;
  }
};

export default rooms;
