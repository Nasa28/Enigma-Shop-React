import actionTypes from '../constants/actionTypes';

export const allproducts = (products) => ({
  type: actionTypes.ALL_PRODUCTS,
  payload: products,
});

export const singleproduct = (product) => ({
  type: actionTypes.SINGLE_PRODUCT,
  payload: product,
});
