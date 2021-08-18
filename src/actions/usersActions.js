const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

const getUsers = () => ({
  type: GET_USERS,
});

const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = () => ({
  type: GET_USERS_FAILURE,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      dispatch(getUsersSuccess(users));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
};
