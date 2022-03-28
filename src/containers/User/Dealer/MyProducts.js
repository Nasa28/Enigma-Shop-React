/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HeatMapOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { myProducts } from '../Dealer/../../../Redux/Actions/myProductAction';
import '../Dealer/../../../styles/Product.css';

const MyProducts = () => {
  const myProduct = useSelector((state) => state.myProducts.products);
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const url = 'https://enigma-shop.herokuapp.com/api/v1/products/myProducts';

  const myFetch = async () => {
    const response = await axios.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },
      { withCredentials: true },
    );
    dispatch(myProducts(response.data.data.myProducts));
  };

  useEffect(() => {
    myFetch();
  }, []);

  const isEmpty = () => {
    return (
      <div className="text-center">
        <h3 className="display-3 text-danger">
          <HeatMapOutlined />
        </h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim
          temporibus. Please Click on Add New Product to add a new product
        </p>
      </div>
    );
  };

  const isNotEmpty = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="my-card">
            {myProduct.map((product) => {
              const { _id, title, description, price, images, slug } = product;
              return (
                <div className="" key={_id}>
                  <Link className="card " to={`/product/${_id}`}>
                    <div>
                      <img className="my-image" src={images} alt={title} />
                    </div>
                    <div>
                      <h3 className="my-title">{title}</h3>
                      <h3 className="title">{price}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="my-prod">
        {myProduct.length === 0 ? isEmpty() : isNotEmpty()}
      </div>
    </>
  );
};

export default MyProducts;
