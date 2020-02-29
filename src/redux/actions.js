export const LOG_IN = "LOG_IN";

export const login = user => {
  return {
    type: LOG_IN,
    payload: {
      ...user
    }
  };
};
