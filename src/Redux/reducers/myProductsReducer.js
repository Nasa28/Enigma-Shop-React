import actionTypes from '../constants/actionTypes';

const initialState = {
  products: [],
};

const myProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.MY_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default myProductsReducer;
