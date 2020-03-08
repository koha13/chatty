import {
  GET_MESSAGES,
  ADD_MESSAGE,
  SENDING_MESSAGE
} from "../actions/messages";

const messages = (state = { data: [], status: "done" }, action) => {
  switch (action.type) {
    case SENDING_MESSAGE: {
      return { data: [...state.data], status: "loading" };
    }
    case GET_MESSAGES:
      return { data: action.payload, status: "done" };
    case ADD_MESSAGE:
      return { data: [action.payload, ...state.data], status: "done" };
    default:
      return state;
  }
};

export default messages;
