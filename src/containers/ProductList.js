/* eslint-disable camelcase */

import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import '../styles/Product.css';
import { fetchProducts } from '../utils/productUtils';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  return (
    <>
      <div className="container">
        <div className="my-card">
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
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
