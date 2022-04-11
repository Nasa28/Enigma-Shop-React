import React from 'react';
import { useNavigate } from 'react-router';
import { deleteAccount } from '../../../utils/accountUtils';
import { useDispatch, useSelector } from 'react-redux';

const DeleteMe = () => {
  const auth = useSelector((state) => state.authenticate);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/verify-email`;
    navigate(path);
  };
  return (
    <div>
      <h2 className="text-center">Delete my account</h2>
      <p>Are you sure you wnat to delete your account?</p>
      <p>This is none reversible</p>
      <p>To continue, click the button below</p>
      <button
        type="button"
        className="btn-danger"
        onClick={(deleteAccount(auth.token), routeChange)}
      >
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteMe;
