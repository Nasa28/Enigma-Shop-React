import actionTypes from '../constants/actionTypes';

export const updateMe = (user) => ({
  type: actionTypes.UPDATE_ME,
  payload: user,
});

export const updateMeFail = (error) => ({
  type: actionTypes.UPDATE_ME_FAIL,
  payload: error,
});

;
