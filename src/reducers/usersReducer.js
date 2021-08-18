export const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function s(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { users: action.payload, loading: false, error: false };
    case "GET_USERS_FAILURE":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
