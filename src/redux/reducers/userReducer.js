import {
  LOG_IN,
  INVALID_LOGIN,
  REQUEST_LOGIN,
  SIGNING_UP
} from "../actions/user";

const user = (state = { status: "done", data: {} }, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };
    case INVALID_LOGIN: {
      return {
        data: {},
        status: "fail"
      };
    }
    case REQUEST_LOGIN: {
      return {
        data: {},
        status: "loging"
      };
    }

    case SIGNING_UP: {
      return {
        data: {},
        status: "signing"
      };
    }

    case "LOG_IN_FAIL": {
      return {
        data: {},
        status: "fail"
      };
    }

    default:
      return state;
  }
};
export default user;
