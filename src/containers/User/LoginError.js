import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const LoginError = () => {
  const login = useSelector((state) => state.login);

  return (
    <div>{login && <p className="alert alert-danger">{login.error}</p>}</div>
  );
};

export default LoginError;
