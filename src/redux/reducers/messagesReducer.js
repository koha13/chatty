import { GET_MESSAGES, ADD_MESSAGE } from "../actions/messages";

const messages = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default messages;
