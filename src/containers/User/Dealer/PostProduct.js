/* eslint-disable camelcase */

import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { newProduct, newProductFail } from '../../../Redux/Actions/newProduct';

const PostProduct = () => {
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    stockBalance: '',
    shipping: '',
    color: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };
  const { title, price, description, stockBalance } = product;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append('title', title);
    loginFormData.append('price', price);
    loginFormData.append('description', description);
    loginFormData.append('stockBalance', stockBalance);
    loginFormData.append('images', selectedFile);
    loginFormData.append('upload_preset', 'kzq3yl0f');
    try {
      const url = 'https://enigma-shop.herokuapp.com/api/v1/products';
      const response = await axios.post(url, loginFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}`,
        },
      });
      dispatch(newProduct(response));
      setProduct({
        title: '',
        price: '',
        description: '',
        stockBalance: '',
        shipping: '',
        color: '',
        images: '',
      });
      setSelectedFile({ images: '' });
    } catch (error) {
      dispatch(newProductFail(error));
    }
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
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <input
              className="form-control"
              type="number"
              name="stockBalance"
              placeholder="Stock Balance "
              value={stockBalance}
              onChange={handleChange}
              required
            />
          </div>
          {/* 
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
          </div> */}

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
          <button type="submit" className="btn btn-primary form-control mb-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostProduct;
