import userApi from "../../axios/user";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const NEW_USER = "NEW_USER";

// Fetch all users from api
export const getUsers = () => {
  return (dispatch, getState) => {
    userApi
      .get("/", {
        headers: {
          Authorization: "Bearer " + getState().user.token
        }
      })
      .then(res => {
        dispatch({ type: GET_ALL_USERS, payload: res.data });
      });
  };
};

export const newUser = user => {
  return {
    type: NEW_USER,
    payload: user
  };
};
