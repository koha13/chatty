import { GET_ALL_USERS, NEW_USER } from "../actions/users";

const users = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;
    case NEW_USER: {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
};
export default users;
