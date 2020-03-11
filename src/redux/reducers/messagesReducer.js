import {
  GET_MESSAGES,
  ADD_MESSAGE,
  SENDING_MESSAGE,
  FETCHING_MESSAGE,
  FETCH_MORE_MSG,
  ADD_MORE_MSG,
  NO_MORE_MSG
} from "../actions/messages";

const messages = (
  state = { data: [], status: "done", moreMsgStatus: "done" },
  action
) => {
  switch (action.type) {
    case SENDING_MESSAGE: {
      return {
        data: [...state.data],
        status: "sending",
        moreMsgStatus: state.moreMsgStatus
      };
    }
    case FETCHING_MESSAGE: {
      return {
        data: [...state.data],
        status: "fetching",
        moreMsgStatus: state.moreMsgStatus
      };
    }
    case GET_MESSAGES:
      return {
        data: action.payload,
        status: "done",
        moreMsgStatus: state.moreMsgStatus
      };
    case ADD_MESSAGE:
      return {
        data: [action.payload, ...state.data],
        status: "done",
        moreMsgStatus: state.moreMsgStatus
      };
    case FETCH_MORE_MSG: {
      return {
        data: state.data,
        status: state.status,
        moreMsgStatus: "moreMsg"
      };
    }
    case ADD_MORE_MSG: {
      return {
        data: [...state.data, ...action.payload],
        status: state.status,
        moreMsgStatus: "done"
      };
    }
    case NO_MORE_MSG: {
      return {
        data: state.data,
        status: state.status,
        moreMsgStatus: "noMoreMsg"
      };
    }
    default:
      return state;
  }
};

export default messages;
