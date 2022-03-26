/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { allproducts } from '../Redux/Actions/productActions';
import '../styles/Product.css';

const MyProducts = () => {
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'https://enigma-shop.herokuapp.com/api/v1/products';

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
            const { _id, title, description, price, images, slug } = product;
            return (
              <div className="meal-card " data-testid="meal-card" key={_id}>
                <Link className="cards " to={`/product/${_id}`}>
                  <div>
                    <img className="image" src={images} alt={title} />
                  </div>
                  <div>
                    <h3 className="title">{title}</h3>
                    <h3 className="title">{price}</h3>
                  </div>
                </Link>

                <div>
                  <Link to={`/product/${_id}`}>
                    <button type="button" className="btn btn-primary">
                      Book product
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyProducts;
