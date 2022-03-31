/* eslint-disable camelcase */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { singleproduct } from '../Redux/Actions/productActions';

const ProductDetails = () => {
  const details = useSelector((state) => state.detail.details);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let params = useParams();
  const url = `https://enigma-shop.herokuapp.com/api/v1/products/${params.slug}`;
  const fetchDetails = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(singleproduct(response.data.data.product));
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.slug]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const { title, description, price, stockBalance, images, sold } = details;
  return (
    <div className="container">
      <div>
        <h3>
          Title:
          {title}
        </h3>
        <p>
          Description:
          {description}
        </p>
        <p>Price: ${price}</p>
        <p>Stock Balance: {stockBalance}</p>

        <p>Number Sold: {sold}</p>
        <img src={images} alt={title} className="detail-img" />
      </div>
      <div className="description">
        <h3 className="text-decoration-underline">product Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
