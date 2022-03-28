import actionTypes from '../constants/actionTypes';

export const newProduct = (user) => ({
  type: actionTypes.NEW_PRODUCT,
  payload: user,
});

export const newProductFail = (error) => ({
  type: actionTypes.NEW_PRODUCT_FAIL,
  payload: error,
});
