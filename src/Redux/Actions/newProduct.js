import actionTypes from '../constants/actionTypes';

export const newProduct = (product) => ({
  type: actionTypes.NEW_PRODUCT,
  payload: product,
});

export const newProductFail = (error) => ({
  type: actionTypes.NEW_PRODUCT_FAIL,
  payload: error,
});
