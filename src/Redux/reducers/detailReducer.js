import actionTypes from '../constants/actionTypes';

const initialState = {
  details: [],
};

const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SINGLE_PRODUCT:
      return { ...state, details: payload };
    default:
      return state;
  }
};

export default detailReducer;
