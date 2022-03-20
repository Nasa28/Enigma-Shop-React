import actionTypes from '../constants/actionTypes';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ALL_products:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productReducer;
