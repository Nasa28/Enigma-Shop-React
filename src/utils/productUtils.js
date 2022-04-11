import axios from 'axios';
import { allproducts } from '../Redux/Actions/productActions';

export const fetchProducts = async (dispatch) => {
  const url = 'https://enigma-shop.herokuapp.com/api/v1/products';

  const response = await axios.get(url);
  dispatch(allproducts(response.data.products));
};
