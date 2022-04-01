import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { updateMe } from '../../../Redux/Actions/updateMe';
import authenticate from '../../../Redux/Actions/authenticate';
const UpdateUser = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate);
  const user = useSelector((state) => state.login.user.user);
  const { firstName, lastName, email, address, phoneNumber } = user;
  const [person, setPerson] = useState({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'https://enigma-shop.herokuapp.com/api/v1/users/updateMe';

    const response = await axios.patch(
      url,
      { ...person },
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },
      { withCredentials: true },
    );
    dispatch(
      authenticate({
        status: true,
        token: auth.token,
        firstName: response.data.data.user.firstName,
        lastName: response.data.data.user.lastName,
      }),
    );
    dispatch(updateMe(response.data));
    toast.success('Account updated');
  };
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
      <h2 className="text-center  mb-3">Update Information</h2>
      {/* {!user.token && <Navigate to="/login" replace />} */}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={person.firstName}
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
            value={person.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Address"
            value={person.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={person.phoneNumber}
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

        <button type="submit" className="btn btn-primary form-control">
          Register
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
