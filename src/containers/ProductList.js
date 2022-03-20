/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { allproducts } from '../Redux/Actions/productActions';
import Product from '../components/Product';
import '../styles/Product.css';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'http://localhost:3000/api/v1/products/';
  const myFetch = async () => {
    const response = await axios.get(url);
    dispatch(allproducts(response.data.products));
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
            const { _id, title, address, description, price, images, slug } =
              product;
            return (
              <Product
                key={_id}
                id={_id}
                title={title}
                address={address}
                description={description}
                price={price}
                image={images[0]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
