/* eslint-disable camelcase */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { singleproduct } from '../Redux/Actions/productActions';
import '../styles/Details.css';

const ProductDetails = () => {
  const details = useSelector((state) => state.detail.details);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `https://enigma-shop.herokuapp.com/api/v1/products/${id}`;
  const fetchDetails = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(singleproduct(response.data.data.product));
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const { name, address, description, price, images } = details;
  return (
    <div className="container">
      <div>
        <h3>
          Name:
          {name}
        </h3>
        <p>
          Address:
          {address}
        </p>
        <p>Price: ${price}</p>
        <img src={images} alt={name} className="detail-img" />
      </div>
      <div className="description">
        <h3 className="text-decoration-underline">product Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
