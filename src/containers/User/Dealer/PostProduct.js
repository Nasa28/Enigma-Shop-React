/* eslint-disable camelcase */

import React, { useState } from 'react';
import axios from 'axios';
import DashboardNav from './DashboardNav';
// import { toast, ToastContainer } from 'react-toastify';
// import { Navigate } from 'react-router';
// import authenticate from '../../Redux/Actions/authenticate';

//import { userSignup, SignupFailure } from '../../Redux/Actions/signup';

const PostProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    stockBalance: '',
    images: '',
    shipping: '',
    color: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };
  const { title, price, description, images, stockBalance, color } = product;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = 'https://enigma-shop.herokuapp.com/api/v1/products';
      const response = await axios.post(url, { ...product });
    } catch (error) {}
  };
  return (
    <>
      <div className="col-4 form">
        <h2 className="text-center  mb-3">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              className="form-control"
              type="file"
              name="images"
              placeholder="images"
              value={images}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              className="form-control"
              type="number"
              name="stockbalance"
              placeholder="Stock Balance "
              value={stockBalance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              className="form-control"
              type="number"
              name="stockbalance"
              placeholder="Stock Balance "
              value={stockBalance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="d-block" htmlFor="shipping">
              Shipping Available:
              <select
                onChange={handleChange}
                name="shipping"
                placeholder="Shipping"
                className="ml-3"
              >
                <option value="Yes">Yes</option>

                <option value="No">No</option>
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostProduct;
