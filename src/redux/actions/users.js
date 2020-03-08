import userApi from "../../axios/user";

export const GET_ALL_USERS = "GET_ALL_USERS";

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
