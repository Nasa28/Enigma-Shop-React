import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
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
      const url = process.env.REACT_APP_LOGIN;
      const response = await axios.post(url, person);
      dispatch(userLogin(response.data));
      dispatch(
        authenticate({
          status: true,
          token: response.data.token,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          role: response.data.user.role,

          // id: response.data.id,
        }),
      );
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      toast.warning(login.error);
    }
  };
  const { email, password } = person;

  return (
    <div className="col-4 form">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="text-center mb-4">Login</h2>
      {login.error && <LoginError />}
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
