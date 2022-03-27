/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router';
import authenticate from '../../Redux/Actions/authenticate';

import { userSignup, SignupFailure } from '../../Redux/Actions/signup';

const Register = () => {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.signup);
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  });
  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };
  const { firstName, lastName, password, passwordConfirm } = person;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = 'http://localhost:3000/api/v1/users/register';
      // const url = 'https://enigma-shop.herokuapp.com/api/v1/users/signUp';

      const response = await axios.post(url, { ...person, email });
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response.data));
      dispatch(
        userSignup({
          status: true,
          token: response.data.token,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
        }),
      );
    } catch (error) {
      dispatch(SignupFailure(`${error.response.data.message}, Try again`));
      console.log(register.error);
      toast.warning(register.error);
    }

    if (person.email && person.password && person.passwordConfirm) {
      dispatch(
        userSignup({
          ...person,
        }),
      );
    }
  };

  if (register.user.token) {
    const { user } = register;
    console.log(user);
    dispatch(
      authenticate({
        status: true,
        token: user.data.token,
        firstName: user.data.user.firstName,
        lastName: user.data.user.lastName,
      }),
    );
  }
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
      <h2 className="text-center  mb-3">Register</h2>
      {register.user.token && <Navigate to="/products" replace />}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
            disabled
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password "
            value={passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary form-control">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
