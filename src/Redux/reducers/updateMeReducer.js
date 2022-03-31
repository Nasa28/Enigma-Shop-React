import actionTypes from '../constants/actionTypes';

const initialState = {
  user: {},
  error: '',
};

const updateMeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_ME:
      return {
        user: payload,
      };

    case actionTypes.UPDATE_ME_FAIL:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default updateMeReducer;
