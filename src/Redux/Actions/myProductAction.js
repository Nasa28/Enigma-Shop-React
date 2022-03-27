import actionTypes from '../constants/actionTypes';

export const myProducts = (products) => ({
  type: actionTypes.MY_PRODUCTS,
  payload: products,
});

export const singleproduct = (product) => ({
  type: actionTypes.SINGLE_PRODUCT,
  payload: product,
});
