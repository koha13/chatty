import auth from "../../axios/auth";

export const LOG_IN = "LOG_IN";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const INVALID_LOGIN = "INVALID_LOGIN";

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: REQUEST_LOGIN });
    auth
      .post("/login", {
        email: email,
        password: password
      })
      .then(res => {
        dispatch({
          type: LOG_IN,
          payload: { ...res.data.user, token: res.data.token }
        });
      })
      .catch(err => {
        if (err.response) {
          dispatch({ type: INVALID_LOGIN });
        }
      });
  };
};
