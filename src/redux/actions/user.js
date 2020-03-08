import auth from "../../axios/auth";

export const LOG_IN = "LOG_IN";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const INVALID_LOGIN = "INVALID_LOGIN";
export const SIGNING_UP = "SIGNING_UP";

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

export const signup = form => {
  return dispatch => {
    dispatch({ type: SIGNING_UP });
    auth
      .post("/register", { ...form })
      .then(res => {
        dispatch(login(res.data.email, form.password));
      })
      .catch(err => {
        if (err) dispatch({ type: "LOG_IN_FAIL" });
      });
  };
};
