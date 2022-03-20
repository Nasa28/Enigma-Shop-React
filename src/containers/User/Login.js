import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../Redux/Actions/authenticate';
import { userLogin, loginFailure } from '../../Redux/Actions/login';
import LoginError from './LoginError';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.authenticate);

  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const url = 'https://enigma-shop.herokuapp.com/api/v1/users/login';

      const url = 'http://localhost:3000/api/v1/users/login';
      const response = await axios.post(url, { ...person });
      localStorage.setItem('token', JSON.stringify(response.data));
      dispatch(
        userLogin({
          token: response.data.token,
          email: response.data.email,
          id: response.data.id,
        }),
      );
      dispatch(
        authenticate({
          status: true,
          token: response.data.token,
          email: response.data.email,
          id: response.data.id,
        }),
      );
    } catch (error) {
      dispatch(loginFailure(`${error.response.data.message}, Try again`));
    }
  };
  const { email, password } = person;
  return (
    <div className="col-4 form">
      <h2 className="text-center mb-4">Login</h2>
      {login.error && <LoginError error={login.error} />}
      {auth.status && <Navigate to="/" replace />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control mb-4"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary  form-control">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
