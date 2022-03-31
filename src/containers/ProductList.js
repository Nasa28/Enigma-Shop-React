/* eslint-disable camelcase */

import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { allproducts } from '../Redux/Actions/productActions';
import Product from '../components/Product';
import '../styles/Product.css';

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const url = 'https://enigma-shop.herokuapp.com/api/v1/products';

  const fetchProducts = async () => {
    const response = await axios.get(url);
    dispatch(allproducts(response.data.products));
  };

  useEffect(() => {
    fetchProducts();
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
