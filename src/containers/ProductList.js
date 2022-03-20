/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { allproducts } from '../Redux/Actions/productActions';
// import Product from '../components/Product';
import '../styles/Product.css';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'https://ancient-wildwood-13722.herokuapp.com/api/v1/products';
  const myFetch = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(allproducts(response.data.data.products));
    setLoading(false);
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main data-testid="loading">
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="container">
        <div className="productList">
          {products.map((product) => {
            const { _id, name, address, description, price, image, slug } =
              product;
            return (
              <product
                key={_id}
                id={_id}
                name={name}
                address={address}
                description={description}
                price={price}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
