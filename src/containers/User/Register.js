/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../Redux/Actions/authenticate';

import { userSignup, SignupFailure } from '../../Redux/Actions/signup';

const Register = () => {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.signup);

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };
  const { firstName, lastName, email, password, passwordConfirm } = person;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = 'http://localhost:3000/api/v1/users/register';
      // const url = 'https://enigma-shop.herokuapp.com/api/v1/users/signUp';
      console.log(person);

      const response = await axios.post(url, { ...person });

      localStorage.setItem('token', JSON.stringify(response.data));
      dispatch(
        userSignup({
          token: response.data.token,
          username: response.data.username,
        }),
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }

    if (person.username && person.password && person.passwordConfirm) {
      dispatch(
        userSignup({
          ...person,
        }),
      );
    }
  };

  if (register.user.token) {
    const { user } = register;
    dispatch(
      authenticate({
        status: true,
        token: user.token,
        username: user.username,
      }),
    );
  }
  return (
    <div className="col-4 form">
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
