import actionTypes from '../constants/actionTypes';

export const fetchusers = (users) => ({
  type: actionTypes.FETCH_USERS,
  payload: users,
});

export const fetchUsersFail = (error) => ({
  type: actionTypes.FETCH_USERS_FAIL,
  payload: error,
});
