import { LOG_IN } from "./actions";

export const user = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };

    default:
      return state;
  }
};
