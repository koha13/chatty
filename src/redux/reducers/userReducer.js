import { LOG_IN, INVALID_LOGIN, REQUEST_LOGIN } from "../actions/user";

const user = (
  state = { isFetching: false, isInvalid: false, data: {} },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };
    case INVALID_LOGIN: {
      return { ...state, isInvalid: true, isFetching: false };
    }
    case REQUEST_LOGIN: {
      return {
        ...state,
        isFetching: true,
        isInvalid: false
      };
    }

    default:
      return state;
  }
};
export default user;
