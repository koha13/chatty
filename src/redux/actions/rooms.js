import roomApi from "../../axios/room";

export const ADD_ROOM = "ADD_ROOM";
export const UPDATE_STATUS_USER_IN_ROOM = "UPDATE_STATUS_USER_IN_ROOM";
export const UPDATE_READ_STATUS = "UPDATE_READ_STATUS";
export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const FETCHING_ROOM = "FETCHING_ROOM";

// Fetch rooms from api and add to store.rooms
export const addRooms = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchingRoom());
      let res = await roomApi.get("/", {
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      });
      dispatch({ type: ADD_ROOM, payload: res.data });
    } catch (error) {
      //
    }
  };
};

// Fetching room action
const fetchingRoom = () => {
  return {
    type: FETCHING_ROOM
  };
};

// Create room from Api
export const createRoom = room => {
  return (dispatch, getState) => {
    roomApi
      .post(
        "/create",
        { users: room.users, name: room.name },
        {
          headers: {
            Authorization: "Bearer " + getState().user.token
          }
        }
      )
      .then(res => {
        dispatch(addNewRoom(res.data));
      });
  };
};

// Add new room to store.rooms
export const addNewRoom = room => {
  return { type: ADD_NEW_ROOM, payload: room };
};

// Update read status room in store.rooms
export const updateReadStatus = (room_id, status) => {
  return {
    type: UPDATE_READ_STATUS,
    payload: {
      room_id,
      status
    }
  };
};

// Update online status of user in room
export const updateUserStatusInRoom = (user, status) => {
  return {
    type: UPDATE_STATUS_USER_IN_ROOM,
    payload: {
      user,
      status
    }
  };
};
