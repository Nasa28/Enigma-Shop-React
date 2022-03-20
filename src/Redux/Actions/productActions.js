import actionTypes from '../constants/actionTypes';

export const allproducts = (products) => ({
  type: actionTypes.ALL_products,
  payload: products,
});

export const singleproduct = (product) => ({
  type: actionTypes.SINGLE_product,
  payload: product,
});
