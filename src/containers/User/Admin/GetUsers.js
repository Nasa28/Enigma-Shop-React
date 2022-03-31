/* eslint-disable camelcase */

import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HeatMapOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUsersFail,
  fetchusers,
} from '../../../Redux/Actions/fetchUsersAction';
import '../Dealer/../../../styles/Product.css';

const GetUsers = () => {
  const allUsers = useSelector((state) => state.getUser.users);
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const url = 'https://enigma-shop.herokuapp.com/api/v1/users';

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
    dispatch(fetchusers(response.data.data.users));
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
            {allUsers.map((user) => {
              const { _id, firstName, lastName, email, role } = user;
              return (
                <div className="" key={_id}>
                  <Link className="card " to={`/product/${_id}`}>
                    <div>
                      <h3 className="my-title">{firstName}</h3>
                      <h3 className="title text-success"> {lastName}</h3>
                      <p>{email}</p>
                      <p>{role}</p>
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
        {allUsers.length === 0 ? isEmpty() : isNotEmpty()}
      </div>
    </>
  );
};

export default GetUsers;
