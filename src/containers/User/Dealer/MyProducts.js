/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Dealer/../../../components/Loading';
import { myProducts } from '../Dealer/../../../Redux/Actions/myProductAction';
import '../Dealer/../../../styles/Product.css';
import Dashboard from '../Dashboard';
import DashboardNav from './DashboardNav';

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

  return (
    <>
      <DashboardNav />
      <div className="">
        <div className="my-card">
          {myProduct.map((product) => {
            const { _id, title, description, price, images, slug } = product;
            return (
              <div className="" key={_id}>
                <Link className="cards " to={`/product/${_id}`}>
                  <div>
                    <img className="image" src={images} alt={title} />
                  </div>
                  <div>
                    <h3 className="title">{title}</h3>
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

export default MyProducts;
