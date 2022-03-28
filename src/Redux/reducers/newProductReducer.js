import actionTypes from '../constants/actionTypes';

const initialState = {
  // product: {},
  error: '',
};

const newProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.NEW_PRODUCT:
      return {
        product: payload,
      };

    case actionTypes.NEW_PRODUCT_FAIL:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default newProductReducer;
