import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authenticate from '../../Redux/Actions/authenticate';
import { toast, ToastContainer } from 'react-toastify';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('token');
    dispatch(authenticate());
  }, []);

  return (
    <>
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
      {toast.success('You have been logged out') && (
        <Navigate
          to={{
            pathname: '/',
            message: "You've been signed out!",
          }}
        />
      )}
    </>
  );
}

export default Logout;
