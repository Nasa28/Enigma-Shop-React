import actionTypes from '../constants/actionTypes';

const initialState = {
  users: [],
};

const fetchUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export default fetchUsersReducer;
